require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const slugify = require("react-slugify").default;

const siteUrl = process.env.URL || `https://web.didiglobal.com`;

module.exports = {
  trailingSlash: `always`,
  siteMetadata: {
    siteUrl: "https://web.didiglobal.com",
    title: "DiDi",
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: { placeholder: `blurred` },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    "gatsby-plugin-bundle-stats",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DiDi Global`,
        short_name: `DiDi Global`,
        start_url: `/`,
        background_color: `#FF7D41`,
        theme_color: `#FF7D41`,
        display: `standalone`,
        icon: `src/images/DDlogo.ico`,
      },
    },
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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        pageLimit: 444,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PKNGZ5P",
        includeInDevelopment: true,
        routeChangeEventName: "pageview",
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
   

        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return [...allPages];
        },
        // serialize: ({ path, modifiedGmt }) => {
        //   return {
        //     url: path,
        //     lastmod: modifiedGmt,
        //   }
        // },
      },
    },
  ],
};
