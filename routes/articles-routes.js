const path = require(`path`);
const slugify = require("slugify");

// @desc: Create Routes from WP for all countries and pass pageContext to template
// @return: null
const guidesRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allContentfulArticle {
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
  const templatePath = `./src/pages/templates/articles-template.js`;
  const template = path.resolve(templatePath);

  result.data.allContentfulArticle.nodes.forEach((node) => {
    const { id, slug, category, country } = node;
    const cleanCategory = category.pop();
    const sslCountries = ["cl", "pe", "ar", "co", "ec", "do", "cr", "pa", "mx"];
    // create path depending on the language and category
    let path = `/${country.code}/articulos/${slug}`;
    if (cleanCategory === "food") path = `/${country.code}/food/blog/${slug}`;
    if (!sslCountries.includes(country.code) && cleanCategory !== "food")
      path = `/${country.code}/blog/${slug}`;

    createPage({
      path: path,
      component: template,
      context: {
        id: id,
        category: cleanCategory,
        countryCode: country.code,
      },
    });
  });
};

module.exports.init = guidesRoutesInit;
