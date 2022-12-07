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
    `gatsby-plugin-sharp`,
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
              slug
              country {
                code
              }
            }
          }
          allContentfulArticle(filter: {category: {eq: "rides"}}) {
            nodes {
              title
              slug
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
            /(\/lugares\/(.+))|(\/articulos\/(.+))|(\/guias\/(.+))|(\/ciudades\/(.+))|(\/driver\/(.+))|(\/food\/blog\/(.+))|(\/blog\/(.+))|/;

          const sslCountries = [
            "cl",
            "pe",
            "ar",
            "co",
            "ec",
            "do",
            "cr",
            "pa",
            "mx",
          ];

          const engCountries = ["au", "nz", "eg", "ru"];

          const realPages = allPages.filter((page) => {
            return !urlRegex.test(page.path);
          });

          const cityPages = allCities.map((city) => {
            let path;
            const [countryCode, cityName] = [city.country.code, city.name];
            if (sslCountries.includes(countryCode))
              path = `/${countryCode}/driver/conductor-en-${slugify(
                cityName
              )}/`;
            else if (engCountries.includes(countryCode))
              path = `/${countryCode}/driver/driver-${slugify(cityName)}/`;

            return { path };
          });

          const foodCityPages = allCities.map((city) => {
            let path;
            const [countryCode, cityName] = [city.country.code, city.name];

            path = `/${countryCode}/food/city/${slugify(cityName)}/`;

            return { path };
          });

          const articlePages = allArticles.map((article) => {
            let path;
            const [countryCode, articleSlug] = [
              article.country.code,
              article.slug,
            ];
            if (sslCountries.includes(countryCode))
              path = `/${countryCode}/articulos/${articleSlug}/`;
            else if (engCountries.includes(countryCode))
              path = `/${countryCode}/blog/${articleSlug}/`;
            return { path };
          });

          const guidePages = allGuides.map((guide) => {
            let path;
            const [countryCode, guideSlug] = [guide.country.code, guide.slug];
            if (sslCountries.includes(countryCode))
              path = `/${countryCode}/guias/${guideSlug}/`;
            else if (engCountries.includes(countryCode))
              path = `/${countryCode}/guides/${guideSlug}/`;
            return { path };
          });

          const cityPlacePages = allCities.map((city) => {
            let path;
            const [countryCode, cityName] = [city.country.code, city.name];
            if (sslCountries.includes(countryCode))
              path = `/${countryCode}/lugares/lugares-en-${slugify(cityName)}/`;
            else if (engCountries.includes(countryCode))
              path = `/${countryCode}/places/places-in-${slugify(cityName)}/`;
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
            ...foodCityPages,
            //...cityPlacePages,
            // ...placePages,
            // ...directionPages,
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
