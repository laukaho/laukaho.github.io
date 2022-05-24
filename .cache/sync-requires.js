const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-gatsby-theme-chronoblog-src-pages-404-js": hot(preferDefault(require("/Users/kaholau/Documents/projects/portfolio_site/kaholau/node_modules/gatsby-theme-chronoblog/src/pages/404.js"))),
  "component---node-modules-gatsby-theme-chronoblog-src-pages-tags-js": hot(preferDefault(require("/Users/kaholau/Documents/projects/portfolio_site/kaholau/node_modules/gatsby-theme-chronoblog/src/pages/tags.js"))),
  "component---src-pages-index-mdx": hot(preferDefault(require("/Users/kaholau/Documents/projects/portfolio_site/kaholau/src/pages/index.mdx"))),
  "component---src-pages-projects-mdx": hot(preferDefault(require("/Users/kaholau/Documents/projects/portfolio_site/kaholau/src/pages/projects.mdx")))
}

