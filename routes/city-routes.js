const path = require(`path`);
const slugify = require("slugify");

// @desc: Create Routes for all countries and pass pageContext to template
// @return: null
const cityRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allContentfulCity(filter: {country: {code: {eq: "mx"}, product: {elemMatch: {category: {eq: "food"}}}}}) {
        nodes {
          id
          name
          slug
          country{
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
  const templatePath = `./src/pages/templates/city-template.js`;
  const template = path.resolve(templatePath);

  result.data.allContentfulCity.nodes.forEach((node) => {
    const { id, name, country } = node;
    const citySlug = slugify(name, { lower: true });
    
    if(country?.code) {
      let path = `/${country.code}/food/ciudad/${citySlug}/`;

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
