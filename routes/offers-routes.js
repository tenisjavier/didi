const path = require(`path`);

// @desc: Create Routes from WP for all countries and pass pageContext to template
// @return: null
const offersRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
        allContentfulOffer {
            nodes {
                id
                slug
                country {
                    code
                }
            }
        }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // function to create pages from a WP parent node and a specific template
  const templatePath = `./src/pages/templates/offers-template.js`;
  const template = path.resolve(templatePath);

  result.data.allContentfulOffer.nodes.forEach((node) => {
    const { id, slug, country } = node;
    const sslCountries = ["cl", "pe", "ar", "co", "ec", "do", "cr", "pa", "mx"];

    let path = `/${country.code}/offers/${slug}/`;

    if(sslCountries.includes(country.code)) {
      path = `/${country.code}/promociones/${slug}/`;
    }


    createPage({
      path: path,
      component: template,
      context: {
        id: id
      },
    });
  });
};

module.exports.init = offersRoutesInit;
