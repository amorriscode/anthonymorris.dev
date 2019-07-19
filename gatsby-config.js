module.exports = {
  siteMetadata: {
    title: `Anthony Morris | Software Engineer`,
    description: `Endlessly curious dreamer building products for the future.`,
    author: `@amorriscode`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `amorriscode`,
        short_name: `amorriscode`,
        start_url: `/`,
        background_color: `#1F1837`,
        theme_color: `#1F1837`,
        display: `minimal-ui`,
        icon: `src/images/rocket-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-143384618-2",
        cookieDomain: "anthonymorris.dev",
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
