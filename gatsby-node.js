const wpRoutes = require("./routes/wp-routes");
const wpIndexRoutes = require("./routes/wp-index-routes");

// @desc: Creates all country dynamic routes from WP and other sources
// @return: null
exports.createPages = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  //create wp Routes for all Countries
  // await wpRoutes.init(graphql, createPage);
  // await wpIndexRoutes.init(graphql, createPage);
};

// @desc: Creates ChildImageSharp for WP Image Urls
// @return: null
const { createRemoteFileNode } = require("gatsby-source-filesystem");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SitePage implements Node {
      featuredImageUrl: File @link(from: "featuredImageUrl___NODE")
    }
  `);
};

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  if (node.internal.type === "SitePage" && node.context.featuredImageUrl) {
    let fileNode = await createRemoteFileNode({
      url: node.context.featuredImageUrl, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's Redux store
    });

    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.featuredImageUrl___NODE = fileNode.id;
    }
  }
};
