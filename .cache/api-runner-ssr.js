var plugins = [{
      plugin: require('/Users/kaholau/Documents/projects/portfolio_site/kaholau/node_modules/gatsby-plugin-theme-ui/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/kaholau/Documents/projects/portfolio_site/kaholau/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/kaholau/Documents/projects/portfolio_site/kaholau/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[{"resolve":"/Users/kaholau/Documents/projects/portfolio_site/kaholau/node_modules/gatsby-remark-images","id":"a6314dab-64ae-5b85-a896-b6b3f377227c","name":"gatsby-remark-images","version":"3.11.1","pluginOptions":{"plugins":[],"maxWidth":820,"quality":90,"linkImagesToOriginal":false,"backgroundColor":"transparent","showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]},{"resolve":"/Users/kaholau/Documents/projects/portfolio_site/kaholau/node_modules/gatsby-remark-responsive-iframe","id":"14fa90d3-ae84-54a3-bb14-8c56bdcaa86e","name":"gatsby-remark-responsive-iframe","version":"2.11.0","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]}],"extensions":[".mdx",".md"],"remarkPlugins":[null,null],"defaultLayouts":{"pages":"/Users/kaholau/Documents/projects/portfolio_site/kaholau/node_modules/gatsby-theme-chronoblog/src/components/page/index.js"},"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":820,"quality":90,"linkImagesToOriginal":false,"backgroundColor":"transparent"}},"gatsby-remark-responsive-iframe"],"lessBabel":false,"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/kaholau/Documents/projects/portfolio_site/kaholau"},
    },{
      plugin: require('/Users/kaholau/Documents/projects/portfolio_site/kaholau/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Chronoblog Gatsby Theme","short_name":"Chronoblog","start_url":"/","background_color":"#fff","theme_color":"#3a5f7d","display":"standalone","icon":"src/assets/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"e25f18f354a4fec761a3b8c60f4f0b9c"},
    },{
      plugin: require('/Users/kaholau/Documents/projects/portfolio_site/kaholau/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap.xml","createLinkInHead":true},
    },{
      plugin: require('/Users/kaholau/Documents/projects/portfolio_site/kaholau/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-XXXXXXXXX-X","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
