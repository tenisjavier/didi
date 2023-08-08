const path = require(`path`);

// @desc: Create Routes for all countries and pass pageContext to template
// @return: null
const articlesRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allContentfulArticle {
        nodes {
          id
          slug
          category
          tags {
            name
          }
          country {
            code
          }
          language
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
    const { id, slug, category, country, tags, language } = node;
    let oneTag;
    if (tags) oneTag = tags[0].name;
    const cleanCategory = category.pop();
    const sslCountries = ["cl", "pe", "ar", "co", "ec", "do", "cr", "pa", "mx"];
    // create path depending on the language and category
    let path = `/${country.code}/articulos/${slug}/`;
    if (cleanCategory === "food")
      path = `/${country.code}/food/blog/${slug}/`;
    if (cleanCategory === "food-courier")
      path = `/${country.code}/food/repartidores/${slug}/`;
    if (cleanCategory === "news") path = `/${country.code}/newsroom/${slug}/`;
    if (cleanCategory === "pr" && language === "en")
      path = `/thejourney/${slug}/`;
    if (cleanCategory === "pr" && language === "es")
      path = `/es/thejourney/${slug}/`;
    if (cleanCategory === "pay")
      path = `/${country.code}/didipay/blog/${slug}/`;

    if (
      !sslCountries.includes(country.code) &&
      cleanCategory !== "food" &&
      cleanCategory !== "food-courier" &&
      country.code !== "ru" &&
      country.code !== "int" &&
      cleanCategory !== "pr"
    ) {
      path = `/${country.code}/blog/${slug}/`;
    }

    createPage({
      path: path,
      component: template,
      context: {
        id: id,
        category: cleanCategory,
        countryCode: country.code,
        tag: oneTag,
        language: language,
      },
    });
  });
};

module.exports.init = articlesRoutesInit;
