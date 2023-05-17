const path = require(`path`);
const slugify = require("slugify");

// @desc: Create Routes from WP for all countries and pass pageContext to template
// @return: null
const partnersRoutesInit = async (graphql, createPage) => {
  const result = await graphql(`
    {
      allContentfulPartner {
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
  const templatePath = `./src/pages/templates/partners-template.js`;
  const template = path.resolve(templatePath);

  result.data.allContentfulPartner.nodes.forEach((node) => {
    const { id, slug, country } = node;
    if (country?.code) {
      let path = `/${country?.code}/didimas/${slug}`;
      const sslCountries = [
        "cl",
        "pe",
        "ar",
        "co",
        "ec",
        "do",
        "cr",
        "pa",
        "mx",
      ];

      if (!sslCountries.includes(country.code)) {
        path = `/${country?.code}/didi-advance/${slug}`;
      }

      createPage({
        path: path,
        component: template,
        context: {
          id: id,
          countryCode: country.code,
        },
      });
    }
  });
};

module.exports.init = partnersRoutesInit;
