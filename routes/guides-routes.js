const path = require(`path`);
const slugify = require("slugify");

// @desc: Create Routes from WP for all countries and pass pageContext to template
// @return: null
const guidesRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allContentfulGuide {
        nodes {
          id
          slug
          category
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
  const templatePath = `./src/pages/templates/guides-template.js`;
  const template = path.resolve(templatePath);

  result.data.allContentfulGuide.nodes.forEach((node) => {
    const { id, slug, country, category } = node;
    let path = `/${country.code}/guias/${slug}`;

    if (category == "delivery") {
      path = `/${country.code}/food/repartidores/guias/${slug}`;
    } else if (category == "restaurant") {
      path = `/${country.code}/food/restaurantes/guias/${slug}`;
    }

    createPage({
      path: path,
      component: template,
      context: {
        id: id,
        slug: slug,
        countryCode: country.code,
        category: category,
      },
    });
  });
};

module.exports.init = guidesRoutesInit;
