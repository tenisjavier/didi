const path = require(`path`);
const slugify = require("slugify");

// @desc: Create Routes for all countries and pass pageContext to template
// @return: null
const legalRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allContentfulLegal(
        filter: {
          slug: { ne: null }
          country: { elemMatch: { code: { ne: null } } }
        }
      ) {
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
  const templatePath = `./src/pages/templates/legal-template.js`;
  const template = path.resolve(templatePath);

  result.data.allContentfulLegal.nodes.forEach((node) => {
    const { id, slug } = node;
    const countryCode = JSON.stringify(node.country, null, 2);
    const parsedCountry = JSON.parse(countryCode);
    const noQuoteCountry = slugify(parsedCountry[0].code, { lower: true });
    // create path depending on the language and category
    let path = `/${noQuoteCountry}/legal/${slug}/`;

    createPage({
      path: path,
      component: template,
      context: {
        id: id,
      },
    });
  });
};

module.exports.init = legalRoutesInit;
