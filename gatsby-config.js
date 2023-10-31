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
        output: "/ar/",
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
          const pages = allPages.filter((page) => {
            return (
              page.path.includes(`/ar/`) &&
              !page.path.includes(`/ar/conductor/`) &&
              !page.path.includes(`/ar/articulos/`) &&
              !page.path.includes(`/ar/newsroom/`) &&
              !page.path.includes(`/ar/guias/`) &&
              !page.path.includes(`/ar/legal/`) &&
              !page.path.includes(`/ar/centro-de-ayuda/`)
            );
          });
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/ar/conductor/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/ar/conductor/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/ar/articulos/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/ar/articulos/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/ar/newsroom/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/ar/newsroom/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/ar/guias/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/ar/guias/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/ar/legal/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/ar/legal/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/ar/centro-de-ayuda/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/ar/centro-de-ayuda/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/au/",
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
          const pages = allPages.filter((page) => {
            return (
              page.path.includes(`/au/`) &&
              !page.path.includes(`/au/driver/`) &&
              !page.path.includes(`/au/blog/`) &&
              !page.path.includes(`/au/legal/`) &&
              !page.path.includes(`/au/help-center/`)
            );
          });
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/au/driver/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/au/driver/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/au/blog/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/au/blog/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/au/legal/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/au/legal/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/au/help-center/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/au/help-center/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/cl/",
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
          const pages = allPages.filter((page) => {
            return (
              page.path.includes(`/cl/`) &&
              !page.path.includes(`/cl/conductor/`) &&
              !page.path.includes(`/cl/articulos/`) &&
              !page.path.includes(`/cl/newsroom/`) &&
              !page.path.includes(`/cl/guias/`) &&
              !page.path.includes(`/cl/legal/`) &&
              !page.path.includes(`/cl/centro-de-ayuda/`)
            );
          });
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/cl/conductor/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/cl/conductor/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/cl/articulos/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/cl/articulos/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/cl/newsroom/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/cl/newsroom/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/cl/guias/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/cl/guias/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/cl/legal/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/cl/legal/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/cl/centro-de-ayuda/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/cl/centro-de-ayuda/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/co/",
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
          const pages = allPages.filter((page) => {
            return (
              page.path.includes(`/co/`) &&
              !page.path.includes(`/co/conductor/`) &&
              !page.path.includes(`/co/articulos/`) &&
              !page.path.includes(`/co/newsroom/`) &&
              !page.path.includes(`/co/guias/`) &&
              !page.path.includes(`/co/legal/`) &&
              !page.path.includes(`/co/centro-de-ayuda/`) &&
              !page.path.includes(`/co/food/blog/`) &&
              !page.path.includes(`/co/food/ciudad/`) &&
              !page.path.includes(`/co/food/repartidores/`) &&
              !page.path.includes(`/co/food/restaurantes/`)
            );
          });
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/co/conductor/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/co/conductor/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/co/articulos/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/co/articulos/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/co/newsroom/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/co/newsroom/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/co/guias/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/co/guias/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/co/legal/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/co/legal/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/co/centro-de-ayuda/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/co/centro-de-ayuda/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/co/food/",
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
          const pages = allPages.filter((page) => {
            return (
              page.path.includes(`/co/food/`) &&
              !page.path.includes(`/co/food/blog/`) &&
              !page.path.includes(`/co/food/ciudad/`) &&
              !page.path.includes(`/co/food/repartidores/`) &&
              !page.path.includes(`/co/food/restaurantes/`)
            );
          });
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/co/food/blog/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/co/food/blog/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/co/food/repartidores/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/co/food/repartidores/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/co/food/restaurantes/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/co/food/restaurantes/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/cr/",
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
          const pages = allPages.filter((page) => {
            return (
              page.path.includes(`/cr/`) &&
              !page.path.includes(`/cr/conductor/`) &&
              !page.path.includes(`/cr/newsroom/`) &&
              !page.path.includes(`/cr/legal/`) &&
              !page.path.includes(`/cr/centro-de-ayuda/`) &&
              !page.path.includes(`/cr/food/blog/`) &&
              !page.path.includes(`/cr/food/ciudad/`) &&
              !page.path.includes(`/cr/food/repartidores/`) &&
              !page.path.includes(`/cr/food/restaurantes/`)
            );
          });
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/cr/conductor/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/cr/conductor/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/cr/newsroom/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/cr/newsroom/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/cr/legal/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/cr/legal/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/cr/centro-de-ayuda/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/cr/centro-de-ayuda/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/cr/food/",
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
          const pages = allPages.filter((page) => {
            return (
              page.path.includes(`/cr/food/`) &&
              !page.path.includes(`/cr/food/blog/`) &&
              !page.path.includes(`/cr/food/ciudad/`) &&
              !page.path.includes(`/cr/food/repartidores/`) &&
              !page.path.includes(`/cr/food/restaurantes/`)
            );
          });
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/cr/food/blog/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/cr/food/blog/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/cr/food/repartidores/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/cr/food/repartidores/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/cr/food/restaurantes/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/cr/food/restaurantes/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/do/",
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
          const pages = allPages.filter((page) => {
            return (
              page.path.includes(`/do/`) &&
              !page.path.includes(`/do/articulos/`) &&
              !page.path.includes(`/do/conductor/`) &&
              !page.path.includes(`/do/newsroom/`) &&
              !page.path.includes(`/do/legal/`) &&
              !page.path.includes(`/do/centro-de-ayuda/`)
            );
          });
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/do/articulos/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/do/articulos/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/do/conductor/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/do/conductor/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/do/newsroom/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/do/newsroom/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/do/legal/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/do/legal/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/do/centro-de-ayuda/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/do/centro-de-ayuda/`)
          );
          return [...pages];
        },
      },
    },

    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/ec/",
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
          const pages = allPages.filter((page) => {
            return (
              page.path.includes(`/ec/`) &&
              !page.path.includes(`/ec/articulos/`) &&
              !page.path.includes(`/ec/conductor/`) &&
              !page.path.includes(`/ec/newsroom/`) &&
              !page.path.includes(`/ec/legal/`) &&
              !page.path.includes(`/ec/centro-de-ayuda/`)
            );
          });
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/ec/articulos/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/ec/articulos/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/ec/conductor/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/ec/conductor/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/ec/newsroom/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/ec/newsroom/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/ec/legal/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/ec/legal/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/ec/centro-de-ayuda/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/ec/centro-de-ayuda/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/eg/",
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
          const pages = allPages.filter((page) => {
            return (
              page.path.includes(`/eg/`) &&
              !page.path.includes(`/eg/driver/`) &&
              !page.path.includes(`/eg/help-center/`)
            );
          });
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/eg/driver/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/eg/driver/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/eg/centro-de-ayuda/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/eg/help-center/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/mx/",
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
          const pages = allPages.filter((page) => {
            return (
              page.path.includes(`/mx/`) &&
              !page.path.includes(`/mx/conductor/`) &&
              !page.path.includes(`/mx/articulos/`) &&
              !page.path.includes(`/mx/newsroom/`) &&
              !page.path.includes(`/mx/guias/`) &&
              !page.path.includes(`/mx/legal/`) &&
              !page.path.includes(`/mx/centro-de-ayuda/`) &&
              !page.path.includes(`/mx/food/blog/`) &&
              !page.path.includes(`/mx/food/ciudad/`) &&
              !page.path.includes(`/mx/food/repartidores/`) &&
              !page.path.includes(`/mx/food/restaurantes/`) &&
              !page.path.includes(`/mx/didipay/`) &&
              !page.path.includes(`/mx/prestamos/`)
            );
          });
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/mx/conductor",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/mx/conductor/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/mx/articulos/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/mx/articulos/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/mx/newsroom/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/mx/newsroom/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/mx/guias/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/mx/guias/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/mx/legal/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/mx/legal/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/mx/centro-de-ayuda/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/mx/centro-de-ayuda/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/mx/food/",
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
          const pages = allPages.filter((page) => {
            return (
              page.path.includes(`/mx/food/`) &&
              !page.path.includes(`/mx/food/blog/`) &&
              !page.path.includes(`/mx/food/ciudad/`) &&
              !page.path.includes(`/mx/food/repartidores/`) &&
              !page.path.includes(`/mx/food/restaurantes/`)
            );
          });
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/mx/food/blog/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/mx/food/blog/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/mx/food/ciudad/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/mx/food/ciudad/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/mx/food/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/mx/food/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/mx/food/repartidores/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/mx/food/repartidores/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/mx/food/restaurantes/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/mx/food/restaurantes/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/mx/didipay/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/mx/didipay/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/mx/prestamos/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/mx/prestamos/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/nz/",
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
          const pages = allPages.filter((page) => {
            return (
              page.path.includes(`/nz/`) &&
              !page.path.includes(`/nz/driver/`) &&
              !page.path.includes(`/nz/blog/`) &&
              !page.path.includes(`/nz/legal/`) &&
              !page.path.includes(`/nz/help-center/`)
            );
          });
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/nz/driver/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/nz/driver/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/nz/blog/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/nz/blog/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/nz/legal/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/nz/legal/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/nz/help-center/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/nz/help-center/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/pa/",
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
          const pages = allPages.filter((page) => {
            return (
              page.path.includes(`/pa/`) &&
              !page.path.includes(`/pa/articulos/`) &&
              !page.path.includes(`/pa/conductor/`) &&
              !page.path.includes(`/pa/newsroom/`) &&
              !page.path.includes(`/pa/legal/`) &&
              !page.path.includes(`/pa/centro-de-ayuda/`)
            );
          });
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/pa/articulos/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/pa/articulos/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/pa/conductor/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/pa/conductor/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/pa/newsroom/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/pa/newsroom/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/pa/legal/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/pa/legal/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/pa/centro-de-ayuda/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/pa/centro-de-ayuda/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/pe/",
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
          const pages = allPages.filter((page) => {
            return (
              page.path.includes(`/pe/`) &&
              !page.path.includes(`/pe/articulos/`) &&
              !page.path.includes(`/pe/conductor/`) &&
              !page.path.includes(`/pe/newsroom/`) &&
              !page.path.includes(`/pe/legal/`) &&
              !page.path.includes(`/pe/centro-de-ayuda/`) &&
              !page.path.includes(`/pe/food/blog/`) &&
              !page.path.includes(`/pe/food/ciudad/`) &&
              !page.path.includes(`/pe/food/repartidores/`) &&
              !page.path.includes(`/pe/food/restaurantes/`)
            );
          });
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/pe/articulos/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/pe/articulos/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/pe/conductor/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/pe/conductor/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/pe/newsroom/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/pe/newsroom/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/pe/legal/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/pe/legal/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/pe/centro-de-ayuda/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/pe/centro-de-ayuda/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/pe/food/",
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
          const pages = allPages.filter((page) => {
            return (
              page.path.includes(`/pe/food/`) &&
              !page.path.includes(`/pe/food/blog/`) &&
              !page.path.includes(`/pe/food/ciudad/`) &&
              !page.path.includes(`/pe/food/repartidores/`) &&
              !page.path.includes(`/pe/food/restaurantes/`)
            );
          });
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/pe/food/blog/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/pe/food/blog/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/pe/food/repartidores/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/pe/food/repartidores/`)
          );
          return [...pages];
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/pe/food/restaurantes/",
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
          const pages = allPages.filter((page) =>
            page.path.includes(`/pe/food/restaurantes/`)
          );
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
            return (
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
              !page.path.includes(`/pe/`)
            );
          });

          pages.push({ path: siteUrl + "/ar/sitemap-0" });
          pages.push({ path: siteUrl + "/au/sitemap-0" });
          pages.push({ path: siteUrl + "/cl/sitemap-0" });
          pages.push({ path: siteUrl + "/co/sitemap-0" });
          pages.push({ path: siteUrl + "/cr/sitemap-0" });
          pages.push({ path: siteUrl + "/do/sitemap-0" });
          pages.push({ path: siteUrl + "/ec/sitemap-0" });
          pages.push({ path: siteUrl + "/eg/sitemap-0" });
          pages.push({ path: siteUrl + "/hk/sitemap-0" });
          pages.push({ path: siteUrl + "/mx/sitemap-0" });
          pages.push({ path: siteUrl + "/nz/sitemap-0" });
          pages.push({ path: siteUrl + "/pa/sitemap-0" });
          pages.push({ path: siteUrl + "/pe/sitemap-0" });

          return [...pages];
        },
      },
    },
  ],
};
