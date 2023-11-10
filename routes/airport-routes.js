const path = require(`path`);
const slugify = require("slugify");

// @desc: Create Routes from WP for all countries and pass pageContext to template
// @return: null
const airportRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allContentfulCity(
        filter: {
          product: { elemMatch: { category: { in: "driver" } } }
          hasAirport: { eq: true }
        }
      ) {
        nodes {
          country {
            code
          }
          slug
          id
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const customSlugify = (words) => {
    return slugify(words, {
      lower: true,
      remove: /[,.()'"!:@]/g,
      strict: true,
    });
  };

  const templatePath = `./src/pages/templates/airport-template.js`;
  const template = path.resolve(templatePath);

  result.data.allContentfulCity.nodes.forEach((node) => {
    const { id, slug, country } = node;

    let path = `/${customSlugify(country.code)}/airport/${customSlugify(
      slug
    )}/`;

    createPage({
      path: path,
      component: template,
      context: {
        id,
      },
    });
  });
};

module.exports.init = airportRoutesInit;
