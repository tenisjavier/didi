import React, { useEffect, useState } from "react";
import { useQueryParam } from "gatsby-query-params";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import ArticleHero from "../../../components/sections/ArticleHero";
import ArticleContent from "../../../components/sections/ArticleContent";
import PaxBanner from "../../../components/sections/PaxBanner";
import { getDataPreviewContefulArticle } from "../../../util/utils";

const ArticlePreview = () => {
  const urlId = useQueryParam("id", null);
  const [dataP, setDataP] = useState(null);
  const [dataContentful, setDataContentful] = useState(null);

  const contentfulDataPreview = (params) => {
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/environments/master`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GATSBY_CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
        },

        body: JSON.stringify({
          query: queryPreview,
          variables: { ...params, isPreview: true },
        }),
      }
    )
      .then((res) => res.json())
      .then(({ data }) => {
        if (data) setDataContentful(data);
      });
  };

  if (urlId) contentfulDataPreview({ id: urlId });

  useEffect(() => {
    if (!dataContentful) return;
    setDataP({
      contentfulArticle: getDataPreviewContefulArticle(dataContentful),
    });
  }, [dataContentful]);

  return (
    <Layout>
      {dataP && (
        <>
          <ArticleHero data={dataP}></ArticleHero>
          <ArticleContent data={dataP}></ArticleContent>
          <PaxBanner></PaxBanner>
        </>
      )}
    </Layout>
  );
};

export default ArticlePreview;

const queryPreview = `
query(
  $isPreview: Boolean=false
  $id: String = ""
){
  
  article(id:$id,preview:$isPreview){
    title
    excerpt
    sys{
      publishedAt
    }
    featuredImage{
      url
      width
      height
    }
    content{
      json
      links{
        assets{
          block{
            sys{
              id
            }
            url
            width
            height
            title
            description
            __typename
          }
        }
      }
    }
  }
}
`;
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
