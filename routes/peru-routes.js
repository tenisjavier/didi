const path = require(`path`);

// @desc: Create Routes from different sources
// @return: null
const peruRoutesInit = async (graphql, createPage) => {
  // Create Wp Pages and pass pageContext to template
  const { data } = await graphql(`
    {
      wpPeru {
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

  data.wpPeru.pages.nodes.forEach((node) => {
    // send image url in context if exists
    let featuredImage = node.featuredImage
      ? node.featuredImage.node.mediaItemUrl
      : null;

    // send path with parent if exists
    let parentSlug = node.parent ? node.parent.node.slug + "/" : "";
    let pagePath = parentSlug
      ? "/pe/" + parentSlug + node.slug
      : "/pe/" + node.slug;

    // send id with sitePage id format to match query on template
    let nodeId = "SitePage " + pagePath;

    createPage({
      path: pagePath,
      component: templatePath,
      context: {
        id: nodeId,
        title: node.title,
        featuredImageUrl: featuredImage,
      },
    });
  });
  // End of Wp Pages Creation
};

module.exports.init = peruRoutesInit;
