const path = require(`path`);
const slugify = require("slugify");

// @desc: Create Routes from WP for all countries and pass pageContext to template
// @return: null
const placesRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allContentfulPlace {
        nodes {
          id
          name
          address
          city {
            country {
              code
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
  const templatePath = `./src/pages/templates/places-template.js`;
  const template = path.resolve(templatePath);

  result.data.allContentfulPlace.nodes.forEach((node) => {
    const { id, name, address, city } = node;

    let path = `/${city.country.code}/lugares/como-llegar-a-${slugify(name, {
      lower: true,
    })}_${slugify(address, { lower: true, remove: /[,.()'"!:@]/g })}`;

    createPage({
      path: path,
      component: template,
      context: {
        id: id,
        address: address,
      },
      defer: true,
    });
  });
};

module.exports.init = placesRoutesInit;
