import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import GuideHero from "../../../components/sections/GuideHero";
import RichContent from "../../../components/RichContent";
import PaxBanner from "../../../components/sections/PaxBanner";
import { getDataPreviewContefulGuide } from "../../../util/utils";

const CONTENTFUL_SPACE_ID = "n7hs0hadu6ro"
const CONTENTFUL_PREVIEW_ACCESS_TOKEN = "X7xRmMkl8IFZB_JLBvXw6yGepm9nFbhr40e5na1Y_2E"

const GuideTemplate = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      const [paramQuery,setParamQuery] = useState(params.id)
      const [dataP, setDataP] = useState(null)
      const [dataContentful, setDataContentful] = useState(null)
    
      const contentfulDataPreview = (params) => {
        window.fetch(
          `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/master`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
            },
    
            body: JSON.stringify({ query: queryPreview, variables: {...params, isPreview: true } }),
          }
        )
          .then((res) => res.json())
          .then(({ data }) => {
            if (data) setDataContentful(data);
          })
          setParamQuery(null)
      }
    
      useEffect(() => {
        if(!paramQuery) return
    
        contentfulDataPreview({id: paramQuery})
    
      },[paramQuery])
    
      useEffect(() => {
        if (!dataContentful) return
        setDataP({
          contentfulGuide: getDataPreviewContefulGuide(dataContentful),
        })
      }, [dataContentful])
  return (
    <Layout>
      {dataP&&
        <>
        <GuideHero data={dataP}></GuideHero>
        <section className="container mx-auto mb-32 text-gray-primary md:px-28">
          <RichContent richContent={dataP.contentfulGuide.content}></RichContent>
        </section>
        <PaxBanner></PaxBanner>
        </>
      }
    </Layout>
  );
};

export default GuideTemplate;

const queryPreview = 
`
query(
    #$isPreview: Boolean=false
    $id: String = ""
  ){
    
    guide(
      id:$id
      #preview:$isPreview
    ){
      title
      excerpt
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
`

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