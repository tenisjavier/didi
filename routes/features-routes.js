const path = require(`path`);

// @desc: Create Routes from WP for all countries and pass pageContext to template
// @return: null
const featuresRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allContentfulFeature {
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
  const templatePath = `./src/pages/templates/features-template.js`;
  const template = path.resolve(templatePath);

  result.data.allContentfulFeature.nodes.forEach((node) => {
    const { id, slug, country} = node;
    const sslCountries = ["cl", "pe", "ar", "co", "ec", "do", "cr", "pa", "mx"];

    let path = `/${country.code}/safety/features/${slug}/`;

    if(sslCountries.includes(country.code)) {
      path = `/${country.code}/seguridad/funciones/${slug}/`;
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

module.exports.init = featuresRoutesInit;
