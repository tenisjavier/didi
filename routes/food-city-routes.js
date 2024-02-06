const path = require(`path`);

// @desc: Create Routes for all countries and pass pageContext to template
// @return: null
const cityRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allContentfulCity(
        filter: {
          country: { code: { in: ["mx", "co", "cr", "pe"] } }
          product: { elemMatch: { category: { eq: "food" } } }
        }
      ) {
        nodes {
          id
          name
          slug
          country {
            name
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
  const templatePath = `./src/pages/templates/food-city-template.js`;
  const template = path.resolve(templatePath);

  result.data.allContentfulCity.nodes.forEach((node) => {
    const { id, country, slug } = node;
    const citySlug = slug;

    if (country?.code) {
      let path = `/${country.code}/food/ciudad/${citySlug}/`;

      createPage({
        path: path,
        component: template,
        context: {
          id: id,
          countryCode: country?.code,
        },
      });
    }
  });
};

module.exports.init = cityRoutesInit;
