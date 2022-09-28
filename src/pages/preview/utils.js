const getGatsbyImage = (data) =>{
    return{
        backgoundColor:"#d8d8d8",
        height: data.height,
        width: data.width,
        layout:"constrained",
        images:{
          fallback:{
            sizes:"(min-width: "+data.width+"px) "+data.width+"px, 100vw",
            src: data.url,
            srcSet:data.url,
          },
          sources:[{
            sizes:"(min-width: "+data.width+"px) "+data.width+"px, 100vw",
            srcSet:data.url,
            type:"image/webp"
          }]
        }
      }
}

export const getDataPreviewAllContentfulArticle = (dataContentful)=>{
  return({
        nodes: dataContentful.articleCollection.items.map((item)=>{
          return{
            title: item.title,
            slug: item.slug,
            excerpt: item.excerpt,
            featuredImage:{
              gatsbyImageData: getGatsbyImage(item.featuredImage)
            }
          }
        })
      })
}

export const getDataPreviewContefulArticle = (dataContentful)=>{
  return({
    content:{
      raw: JSON.stringify(dataContentful.article.content.json),
      references: dataContentful.article.content.links.assets.block.map((asset)=>{
        return({
          contentful_id: asset.sys.id,
          description: asset.description,
          title: asset.title,
          gatsbyImageData: getGatsbyImage(asset),
          __typename:"ContentfulAsset"
        })
      })
    },
    excerpt: dataContentful.article.excerpt,
    featuredImage:{
      gatsbyImageData: getGatsbyImage(dataContentful.article.featuredImage)
    },
    title: dataContentful.article.title,
    updatedAt: dataContentful.article.sys.publishedAt
  })
}