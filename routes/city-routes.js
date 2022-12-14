const path = require(`path`);
const slugify = require("slugify");

// @desc: Create Routes for all countries and pass pageContext to template
// @return: null
const cityRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allContentfulCity(filter: {country: {code: {ne: null}}}) {
        nodes {
          id
          name
          slug
          city {
            name
            slug
            country {
              code
              name
            }
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
  const templatePath = `./src/pages/templates/city-template.js`;
  const template = path.resolve(templatePath);

  result.data.allContentfulCity.nodes.forEach((node) => {
    const { id, name, city } = node;
    const citySlug = slugify(name, { lower: true });
    
    if(city.country?.code) {
      let path = `/${city.country.code}/food/${citySlug}/`;

      createPage({
        path: path,
        component: template,
        context: {
          id: id,
        },
      });
    }
  });
};

module.exports.init = cityRoutesInit;
