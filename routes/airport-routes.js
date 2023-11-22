const path = require(`path`);
const slugify = require("slugify");

// @desc: Create Routes from WP for all countries and pass pageContext to template
// @return: null
const airportRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allContentfulCity(filter: { hasAirport: { eq: true } }) {
        nodes {
          country {
            code
          }
          slug
          id
          name
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
    const { id, slug, country, name } = node;

    let path = `/${customSlugify(country.code)}/airport/${customSlugify(
      slug
    )}/`;

    if (country.code === "mx") {
      path = `/${customSlugify(country.code)}/aeropuerto/${customSlugify(
        slug
      )}/`;
    }

    createPage({
      path: path,
      component: template,
      context: {
        id,
        name,
      },
    });
  });
};

module.exports.init = airportRoutesInit;
