const path = require(`path`);
const slugify = require("slugify");

// @desc: Create Routes from WP for all countries and pass pageContext to template
// @return: null
const directionsRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allContentfulDirection {
        nodes {
          id
          origin
          destination
          destinationAddress
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
  const templatePath = `./src/pages/templates/directions-template.js`;
  const template = path.resolve(templatePath);

  result.data.allContentfulDirection.nodes.forEach((node) => {
    const { id, origin, destination, destinationAddress, city } = node;
    let path = `/${city.country.code}/lugares/como-llegar-a-${slugify(
      destination,
      {
        lower: true,
      }
    )}-desde-${slugify(origin, { lower: true })}_${slugify(destinationAddress, {
      lower: true,
      remove: /[,.()'"!:@]/g,
    })}`;

    createPage({
      path: path,
      component: template,
      context: {
        id: id,
      },
    });
  });
};

module.exports.init = directionsRoutesInit;
