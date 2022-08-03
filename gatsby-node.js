const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const result = await graphql(
      `
        {
            allContentfulArticle(
                filter: {
                  category: { in: ["rides", "news"] }
                  country: { code: { eq: "au" } }
                }
                sort: { fields: content___references___createdAt, order: DESC }
                limit: 1000
              ) {
                nodes {
                  title
                  slug
                  excerpt
                  featuredImage {
                    gatsbyImageData
                  }
                }
            }
        }
      `
    )
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    // ...
    // Create blog-list pages
    const posts = result.data.allContentfulArticle.nodes
    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/pages/au/blog/index.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === `allContentfulArticle`) {
      const value = createFilePath({ node, getNode })
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
}