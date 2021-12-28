const path = require(`path`);
const { getCountries, getCountryCodes } = require("../config/countries-config");

const countries = getCountries();
const countryCodes = getCountryCodes();

const wpIndexRoutesInit = async (graphql, createPage) => {
  for (const country of countries) {
    const wpCountry = "wp" + country;
    const { data } = await graphql(`
            {
                ${wpCountry} {
                    allGuia {
                        nodes {
                        title
                        slug
                        featuredImage {
                            node {
                            mediaItemUrl
                            }
                        }
                        }
                    }
                    allArticulo {
                        nodes {
                          featuredImage {
                            node {
                              mediaItemUrl
                            }
                          }
                          title
                          slug
                          excerpt
                        }
                    }
                }
            }
        `);    
        const createIndexPage = async (data, template) => {
            const templatePath = path.resolve(template);
            let pagePath = '/' + countryCodes[country] + '/guias';
            let nodeId = "SitePage" + pagePath;

            createPage({
                path: pagePath,
                component: templatePath,
                context:{
                    id: nodeId,
                    allData: data
                }
            })
        }

        const createArticleIndex = async (data, template) => {
            const templatePath = path.resolve(template);
            let pagePath = '/' + countryCodes[country] + '/articulos';
            let nodeId = "SitePage" + pagePath;

            createPage({
                path: pagePath,
                component: templatePath,
                context:{
                    id: nodeId,
                    allData: data
                }
            })
        }

        const pageTemplate = `./src/templates/wp-guide-index.js`;
        const articleIndexTemplate = `./src/templates/wp-article-index.js`;
        await createIndexPage(data[wpCountry].allGuia.nodes, pageTemplate);
        await createArticleIndex(data[wpCountry].allArticulo.nodes, articleIndexTemplate);
    };

    const pageTemplate = `./src/templates/wp-guide-index.js`;
    await createIndexPage(data[wpCountry].allGuia.nodes, pageTemplate);
  }
};

module.exports.init = wpIndexRoutesInit;
