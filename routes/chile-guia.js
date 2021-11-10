
const path = require("path");
const chileGuias = async (graphql, createPage) => {
    const { data } = await graphql(`
    {
        wpChile {
          allGuia {
            nodes {
              title
              slug
              content
            }
          }
        }
    }
    `);

    const template = path.resolve(`src/templates/guia.js`);

    data.wpChile.allGuia.nodes.forEach(guia => {
        createPage({
            path: `/cl/guias/${guia.slug}`,
            component: template,
            context: {
                slug: guia.slug,
                title: guia.title,
                content: guia.content
            }
        })
    });
    
}

module.exports.init = chileGuias;