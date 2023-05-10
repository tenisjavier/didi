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
        output:'/ar/' ,
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
          const pages = allPages.filter((page)=> page.path.includes(`/ar/`))
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output:'/au/' ,
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
          const pages = allPages.filter((page)=> page.path.includes(`/au/`))
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output:'/cl/' ,
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
          const pages = allPages.filter((page)=> page.path.includes(`/cl/`))
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output:'/co/' ,
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
          const pages = allPages.filter((page)=> page.path.includes(`/co/`))
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output:'/cr/' ,
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
          const pages = allPages.filter((page)=> page.path.includes(`/cr/`))
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output:'/do/' ,
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
          const pages = allPages.filter((page)=> page.path.includes(`/do/`))
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output:'/ec/' ,
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
          const pages = allPages.filter((page)=> page.path.includes(`/ec/`))
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output:'/eg/' ,
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
          const pages = allPages.filter((page)=> page.path.includes(`/eg/`))
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output:'/hk/' ,
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
          const pages = allPages.filter((page)=> page.path.includes(`/hk/`))
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output:'/mx/' ,
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
          console.log(allPages);
          const pages = allPages.filter((page)=> page.path.includes(`/mx/`))
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output:'/nz/' ,
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
          const pages = allPages.filter((page)=> page.path.includes(`/nz/`))
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output:'/pa/' ,
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
          const pages = allPages.filter((page)=> page.path.includes(`/pa/`))
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output:'/pe/' ,
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
          const pages = allPages.filter((page)=> page.path.includes(`/pe/`))
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output:'/ru/' ,
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
          const pages = allPages.filter((page)=> page.path.includes(`/ru/`))
          return [...pages];
        },
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
          let pages = allPages.filter((page) => {
            return(
              !page.path.includes(`/ar/`) && 
              !page.path.includes(`/au/`) &&
              !page.path.includes(`/cl/`) && 
              !page.path.includes(`/co/`) && 
              !page.path.includes(`/cr/`) && 
              !page.path.includes(`/do/`) &&
              !page.path.includes(`/ec/`) &&
              !page.path.includes(`/eg/`) &&
              !page.path.includes(`/hk/`) &&
              !page.path.includes(`/mx/`) &&
              !page.path.includes(`/nz/`) &&
              !page.path.includes(`/pa/`) &&
              !page.path.includes(`/pe/`) &&
              !page.path.includes(`/ru/`)
            )
          });

          pages.push({path: siteUrl+"/ar/sitemap-0"});
          pages.push({path: siteUrl+"/au/sitemap-0"});
          pages.push({path: siteUrl+"/cl/sitemap-0"});
          pages.push({path: siteUrl+"/co/sitemap-0"});
          pages.push({path: siteUrl+"/cr/sitemap-0"});
          pages.push({path: siteUrl+"/do/sitemap-0"});
          pages.push({path: siteUrl+"/ec/sitemap-0"});
          pages.push({path: siteUrl+"/eg/sitemap-0"});
          pages.push({path: siteUrl+"/hk/sitemap-0"});
          pages.push({path: siteUrl+"/mx/sitemap-0"});
          pages.push({path: siteUrl+"/nz/sitemap-0"});
          pages.push({path: siteUrl+"/pa/sitemap-0"});
          pages.push({path: siteUrl+"/pe/sitemap-0"});
          pages.push({path: siteUrl+"/ru/sitemap-0"});

          return [...pages];
        },
      }
    },
  ],
};
