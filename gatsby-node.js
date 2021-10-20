const argentinaRoutes = require("./routes/argentina-routes");
const chileRoutes = require("./routes/chile-routes");
const colombiaRoutes = require("./routes/colombia-routes");
const costaRicaRoutes = require("./routes/costarica-routes");
const ecuadorRoutes = require("./routes/ecuador-routes");
// const mexicoRoutes = require('./routes/costarica-routes')
const panamaRoutes = require("./routes/panama-routes");
const peruRoutes = require("./routes/peru-routes");

// @desc: Creates all country dynamic routes from WP and other sources
// @return: null
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  await argentinaRoutes.init(graphql, createPage);
  await chileRoutes.init(graphql, createPage);
  await colombiaRoutes.init(graphql, createPage);
  await costaRicaRoutes.init(graphql, createPage);
  await ecuadorRoutes.init(graphql, createPage);
  //await mexicoRoutes.init(graphql, createPage);
  await panamaRoutes.init(graphql, createPage);
  await peruRoutes.init(graphql, createPage);
};

// @desc: Creates ChildImageSharp for WP Image Urls
// @return: null
const { createRemoteFileNode } = require("gatsby-source-filesystem");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SitePage implements Node {
      featuredImgSrc: File @link(from: "featuredImgSrc___NODE")
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
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (
    node.internal.type === "SitePage" &&
    node.context.featuredImageUrl !== null &&
    node.context.featuredImageUrl !== undefined
  ) {
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

// ======= Ejemplo para crear tus propios nodos padres =========

// exports.sourceNodes = async ({
//   actions: { createNode },
//   createNodeId,
//   createContentDigest,
// }) => {
//   const countries = [
//     { countryName: "Chile", countryCode: "CL", id: "1" },
//     { countryName: "Argentina", countryCode: "AR", id: "2" },
//     { countryName: "Colombia", countryCode: "CO", id: "3" },
//   ];

//   countries.forEach((node) => {
//     createNode({
//       ...node,
//       id: createNodeId("COUNTRY-" + node.id),
//       parent: null,
//       children: [],
//       internal: {
//         type: "COUNTRY",
//         content: JSON.stringify(node),
//         contentDigest: createContentDigest(node),
//       },
//     });
//   });
// };
