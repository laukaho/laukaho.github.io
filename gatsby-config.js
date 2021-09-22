module.exports = {
  siteMetadata: {
    siteTitle: 'Ka Ho, LAU',
    siteDescription: 'Blogs, Tutorials, Dev Logs and Projects from  Ka Ho',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://kaholau.com/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Ka Ho, LAU', // for example - 'Ivan Ganev'
    authorDescription: 'Tech Enthusiast', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `at`,
        url: `kaholau.dev@gmail.com`,
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/kaholau_dev`,
      },
      {
        icon: `github`,
        url: `https://github.com/laukaho`,
      },
      {
        icon: `patreon`,
        url: `https://www.patreon.com/kaholau`,
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags',
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 ',
            },
          },
        },
        feedSearch: {
          symbol: '🔍',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X',
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        // replace "chronoblog-1" with your own disqus shortname
        shortname: `chronoblog-1`,
      },
    },
  ],
};
