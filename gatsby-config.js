require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const slugify = require("react-slugify").default;

const siteUrl = process.env.URL || `https://web.didiglobal.com`;

module.exports = {
  siteMetadata: {
    siteUrl: "https://web.didiglobal.com",
    title: "DiDi",
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faq`,
        path: `${__dirname}/src/faq/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        pageLimit: 666,
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
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`cl`, `ar`, `pe`, `co`, `au`, `do`, `pa`, `ec`, `cr`],
        defaultLanguage: `cl`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://web.didiglobal.com/`,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/:path?/:variable?/",
            getLanguageFromPath: true,
          },
        ],
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
          allContentfulCity {
            nodes {
              name
              country {
                code
              }
            }
          }
          allContentfulGuide {
            nodes {
              title
              country {
                code
              }
            }
          }
          allContentfulArticle(filter: {category: {eq: "rides"}}) {
            nodes {
              title
              country {
                code
              }
            }
          }
          allContentfulPlace {
            nodes {
              name
              address
              city {
                country {
                  code
                }
              }
            }
          }
          allContentfulDirection {
            nodes {
              origin
              destination
              destinationAddress
              city {
                country {
                  code
                }
              }
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allContentfulCity: { nodes: allCities },
          allContentfulArticle: { nodes: allArticles },
          allContentfulGuide: { nodes: allGuides },
          allContentfulPlace: { nodes: allPlaces },
          allContentfulDirection: { nodes: allDirections },
        }) => {
          const urlRegex =
            /(\/lugares\/(.+))|(\/articulos\/(.+))|(\/guias\/(.+))|(\/ciudades\/(.+))|(\/driver\/(.+))|(\/food\/blog\/(.+))/;

          const realPages = allPages.filter((page) => {
            return !urlRegex.test(page.path);
          });

          const cityPages = allCities.map((city) => {
            const path = `/${city.country.code}/driver/conductores-en-${slugify(
              city.name
            )}/`;
            return { path };
          });

          const articlePages = allArticles.map((article) => {
            const path = `/${article.country.code}/articulos/${slugify(
              article.title
            )}/`;
            return { path };
          });

          const guidePages = allGuides.map((guide) => {
            const path = `/${guide.country.code}/guias/${slugify(
              guide.title
            )}/`;
            return { path };
          });

          const cityPlacePages = allCities.map((city) => {
            const path = `/${city.country.code}/lugares/lugares-en-${slugify(
              city.name
            )}/`;
            return { path };
          });

          const placePages = allPlaces.map((place) => {
            const path = `/${
              place.city.country.code
            }/lugares/como-llegar-a-${slugify(place.name)}_${slugify(
              place.address
            )}/`;
            return { path };
          });

          const directionPages = allDirections.map((dir) => {
            const path = `/${slugify(
              dir.city.country.code
            )}/lugares/como-llegar-a-${slugify(
              dir.destination
            )}-desde-${slugify(dir.origin)}_${slugify(
              dir.destinationAddress
            )}/`;
            return { path };
          });

          return [
            ...realPages,
            ...cityPages,
            ...articlePages,
            ...guidePages,
            ...cityPlacePages,
            ...placePages,
            ...directionPages,
          ];
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
