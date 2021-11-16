const path = require(`path`);
const { getCountries, getCountryCodes } = require("../config/countries-config");

const countries = getCountries();
const countryCodes = getCountryCodes();

// @desc: Create Routes from WP for all countries and pass pageContext to template
// @return: null
const wpRoutesInit = async (graphql, createPage) => {
  for (const country of countries) {
    const wpCountry = "wp" + country;
    const { data } = await graphql(`
      {
        ${wpCountry} {
          allGuia(first: 10000) {
            nodes {
              title
              uri
              content
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
          pages(first: 10000) {
            nodes {
              title
              uri
              content
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
          allArticulo(first: 10000) {
            nodes {
              title
              uri
              content
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    `);

    // function to create pages from a WP parent node and a specific template
    const createPageFromNode = async (nodes, template) => {
      const templatePath = path.resolve(template);

      for (const node of nodes) {
        // send image url in context if exists
        let featuredImage = node.featuredImage
          ? node.featuredImage.node.mediaItemUrl
          : null;

        // send path with the country code as parent, then the wp uri
        let pagePath = "/" + countryCodes[country] + node.uri;

        // send id with sitePage id format to match query on template
        let nodeId = "SitePage " + pagePath;

        createPage({
          path: pagePath,
          component: templatePath,
          context: {
            id: nodeId,
            title: node.title,
            featuredImageUrl: featuredImage,
            content: node.content,
          },
        });
      }
    };
    // End of function Wp Pages Creation

    const pageTemplate = `./src/templates/wp-page.js`;
    const guideTemplate = `./src/templates/wp-guide.js`;
    const articleTemplate = `./src/templates/wp-article.js`;

    await createPageFromNode(data[wpCountry].pages.nodes, pageTemplate);
    await createPageFromNode(data[wpCountry].allGuia.nodes, guideTemplate);
    await createPageFromNode(
      data[wpCountry].allArticulo.nodes,
      articleTemplate
    );
  }
};

module.exports.init = wpRoutesInit;
