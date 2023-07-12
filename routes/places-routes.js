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

  const customSlugify = (words) => {
    return slugify(words, {
      lower: true,
      remove: /[,.()'"!:@]/g,
      strict: true
    })
  }

  result.data.allContentfulPlace.nodes.forEach((node) => {
    const { id, name, address, city } = node;

    let path = `/${city.country.code}/lugares/como-llegar-a-${customSlugify(name)}_${customSlugify(address)}`;

    createPage({
      path: path,
      component: template,
      context: {
        id: id,
        address: address,
      },
    });
  });
};

module.exports.init = placesRoutesInit;
