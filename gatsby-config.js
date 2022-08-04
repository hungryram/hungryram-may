
module.exports = {
  siteMetadata: {
    title: `Web Design for Real Estate and Small Businesses`,
    siteUrl: `https://www.hungryram.com`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-4X5X3V34Y3", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true
        },
      }
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `aid6jtqz`,
        dataset: `production`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.hungryram.com`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/images`
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "static",
        "path": `${__dirname}/static/images`
      },
      __key: "static"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": `${__dirname}/content/blog/`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "services",
        "path": `${__dirname}/content/services/`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "portfolio",
        "path": `${__dirname}/content/portfolio/`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "legal",
        "path": `${__dirname}/content/legal/`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "locations",
        "path": `${__dirname}/content/locations/`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "page",
        "path": `${__dirname}/content/pages/`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "documentation",
        "path": `${__dirname}/content/documentation/`
      },
    },
    "gatsby-transformer-remark"
  ]
};