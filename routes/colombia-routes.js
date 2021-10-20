const path = require(`path`);

// @desc: Create Routes from different sources
// @return: null
const colombiaRoutesInit = async (graphql, createPage) => {
  // Create Wp Pages and create SitePage nodes
  const { data } = await graphql(`
    {
      wpColombia {
        pages(first: 10000) {
          nodes {
            title
            slug
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            parent {
              node {
                slug
              }
            }
          }
        }
      }
    }
  `);
  const templatePath = path.resolve(`./src/pages/wp-template.js`);

  data.wpColombia.pages.nodes.forEach((node) => {
    let featuredImage = node.featuredImage
      ? node.featuredImage.node.mediaItemUrl
      : null;

    let parentSlug = node.parent ? node.parent.node.slug + "/" : "";

    let pagePath = parentSlug
      ? "/co/" + parentSlug + node.slug
      : "/co/" + node.slug;

    createPage({
      path: pagePath,
      component: templatePath,
      context: {
        title: node.title,
        slug: node.slug,
        parentUrl: parentSlug,
        featuredImageUrl: featuredImage,
      },
    });
  });
  // End of Wp Pages Creation
};

module.exports.init = colombiaRoutesInit;
