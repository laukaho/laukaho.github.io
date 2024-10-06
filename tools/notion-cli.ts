require('dotenv').config();
require('dotenv').config({ path: '.env.local' });

const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require('fs');

const token = process.env.NOTION_AUTH_TOKEN;

const notion = new Client({
  auth: `${token}`,
});

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion });

(async () => {
  const mdblocks = await n2m.pageToMarkdown("11782688-7709-809d-902f-debfcc730503");
  const mdString = n2m.toMarkdownString(mdblocks);
  console.log(mdString.parent);
})();
