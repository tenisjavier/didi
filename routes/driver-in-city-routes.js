const path = require(`path`);
const slugify = require("slugify");

// @desc: Create Routes from WP for all countries and pass pageContext to template
// @return: null
const driverInCityRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allContentfulCity(
        filter: { product: { elemMatch: { category: { in: "driver" } } } }
      ) {
        nodes {
          country {
            code
          }
          name
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

  // function to create pages from a WP parent node and a specific template
  const templatePath = `./src/pages/templates/driver-in-city-template.js`;
  const template = path.resolve(templatePath);

  result.data.allContentfulCity.nodes.forEach((node) => {
    const { id, slug, country } = node;
    const sslCountries = ["cl", "pe", "ar", "co", "ec", "do", "cr", "pa", "mx"];
    // create image name depending on country
    let img = `${country.code}.DrvHero.bgImage`;
    // create path depending on the language and category
    let path = `/${country.code}/driver/conductor-en-${slug}/`;
    if (country.code === "mx")
      path = `/${country.code}/conductor/conductor-en-${slug}/`;
    if (!sslCountries.includes(country.code))
      path = `/${country.code}/driver/driver-${slug}/`;

    createPage({
      path: path,
      component: template,
      context: {
        id: id,
        countryCode: country.code,
        componentImage: img,
      },
    });
  });
};

module.exports.init = driverInCityRoutesInit;
