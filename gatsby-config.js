const gatsbySourceGraphqlConfig = require("./config/gatsby-source-graphql-config");

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "didi",
  },
  plugins: [
    ...gatsbySourceGraphqlConfig.get(),
    `gatsby-plugin-image`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faq`,
        path: `${__dirname}/src/faq/`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
