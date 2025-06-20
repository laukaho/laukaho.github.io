// npm run pull-content -- --db 117826887709806a8177df4ee70f8753
require('dotenv').config();
require('dotenv').config({ path: '.env.local' });

const axios = require('axios');
const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require('fs');
const path = require('path');
const yargs = require('yargs');

//Functions
async function retrivePageContentAsync(page) {
    //This function will filter out useful atritubtes and get 
    //the blocks as markdown
    try {

        const pageId = page['id'];
        const props = page['properties'];
        const mdblocks = await n2m.pageToMarkdown(pageId);
        const mdString = n2m.toMarkdownString(mdblocks);

        const tags = props['tags']['multi_select'].map(tag => { return tag['name'] });
        const slug = props['slug']['rich_text'].map(rich_text => { return rich_text['plain_text'] }).join("");
        const title = props['title']['title'].map(title => { return title['plain_text'] }).join("");
        const rawDate = props['publish_date']['date']?.start;
        const publishDate = rawDate ? new Date(rawDate).toISOString().split('T')[0] : null;
        const path_title = title.toLowerCase().replace(' ', '-');
        const filename = `${publishDate}-${path_title}.md`;
        return {
            "title": title,
            "page_id": pageId,
            "slug": slug,
            "publish": props['publish']['checkbox'],
            "publish_date": publishDate,
            "tags": tags,
            "markdown": mdString.parent,
            "filename": filename
        };
    } catch (error) {
        console.error('Error:', error);
    }
}

function saveMarkdown(page, outputFolder, type) {
    console.log("============")
    console.log("saving markdown");
    let title = page['title'];

    const slug = page['slug']
    const pageId = page["page_id"];
    const publishDate = page['publish_date'];
    const markdown = page["markdown"];
    const tags = page['tags']
    const filename = page['filename'];

    console.log(`process page: 
        page_id: ${pageId} 
        filename: ${filename}
    `);

    let content = "";
    
    if(type == 'blog'){
        content +=  "---\n" +
        `${slug == null || slug == "" ? "" : "slug: " + slug + '\n'}`
        + `title: ${title}
authors: [kaholau]
tags: [${tags.join(',')}]
---`;
    }else{
        content += `# ${title}\n`
    }
    console.log("markdown meta: ");
    console.log(content);

    content += markdown

    const fullPath = `${outputFolder}/${filename}`;

    //Save file
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(fullPath, content);
    console.log(`Markdown saved to ${fullPath}`);
}



function fileExistsRecursively(directory, filename) {
    const files = fs.readdirSync(directory);

    for (let file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Recursively check within the subdirectory
            if (fileExistsRecursively(fullPath, filename)) {
                return true;
            }
        } else if (file === filename) {
            // Return true if the file is found
            return true;
        }
    }

    // Return false if the file is not found in this directory or its subdirectories
    return false;
}

//main
const token = process.env.NOTION_AUTH_TOKEN;

const notion = new Client({
    auth: `${token}`,
});
const n2m = new NotionToMarkdown({ notionClient: notion });


//argumments
const argv = yargs
    .option('databaseId', {
        alias: 'db',
        description: 'The database Id',
        type: 'string',
        demandOption: true // Optional, if no output name is provided, use a default name
    })
    .option('outputFolder', {
        alias: 'o',
        description: 'output folder',
        type: 'string',
        default: "./output"
    })
    .option('type', {
        alias: 't',
        description: 'page type',
        type: 'string',
        default: "blog" // blog/note
    })
    .option('force', {
        alias: 'f',
        description: 'set to true if not skipping pulled page',
        type: 'boolean',
        default: false
    })
    .help()
    .alias('help', 'h')
    .argv;




const data = {
    "filter": {
        "and": [
            {
                "property": "publish",
                "checkbox": {
                    "equals": true
                }
            },
            {
                "property": "type",
                "select": {
                    "equals": argv.type
                }
            }
        ]
    }
};

const header = {
    'Authorization': `Bearer ${token}`,
    'Notion-Version': '2022-06-28'
};

//Retrive page id from database
axios.post(`https://api.notion.com/v1/databases/${argv.databaseId}/query`, data, {
    headers: header
}).then(response => {
    const results = response.data['results']
    if (response.data['has_more']) {
        console.log(`[Notion] has_more: ${has_more}`);
        console.log(`! need to further handle, this script not handlling this case at this moment`);
    }
    return results
}).then(async page_infos => { //Retrive page and convert to markdown
    let pages = await Promise.all(page_infos.map(retrivePageContentAsync));

    if (!argv.force) {
        console.log("check if markdown exists");
        const checkFolder = argv.type == 'blog' ? "./blog" : "./docs";
        pages = pages.filter(page => !fileExistsRecursively(checkFolder, `${page['filename']}`));
    }

    return pages;
}).then(pages => { //Save all markdown
    pages.map(page => { saveMarkdown(page, argv.outputFolder, argv.type) });

}).catch(error => {
    console.error('Error:', error);
}).finally(() => {
    console.log("==== finish ====")
});
