import React from "react";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router";
import Layout from "../../components/Layout";
import FaqHero from "../../components/sections/FaqHero";
import FoodFaqHero from "../../components/sections/FoodFaqHero";
import FaqContent from "../../components/sections/FaqContent";
import FaqList from "../../components/sections/FaqList";

const FaqsTemplate = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "mx.HelpCenterHero.bgImage";
  })[0];
  const { title, content } = data.contentfulFaq;
  const { pathname } = useLocation();
  const productName =
    data.contentfulFaq.product != null ? data.contentfulFaq.product.name : "";

  const productFaqs = data.allContentfulProduct.nodes.faq;
  let hero = (
    <FaqHero
      title={title}
      desc={productName}
      bgImage={helpCenterBgImage}
    ></FaqHero>
  );

  if (pathname.includes("/food"))
    hero = (
      <FoodFaqHero
        title={title}
        desc={productName}
        bgImage={helpCenterBgImage}
      ></FoodFaqHero>
    );
  return (
    <Layout>
      {hero}
      <FaqContent title={title} content={content}></FaqContent>
      {productFaqs && (
        <FaqList faqs={data.allContentfulProduct.nodes.faq}></FaqList>
      )}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String, $countryCode: String) {
    allContentfulAsset(
      filter: { title: { regex: "/(mx.HelpCenterHero.bgImage)/" } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    contentfulFaq(id: { eq: $id }) {
      title
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 800)
            __typename
          }
        }
      }
      product {
        name
      }
    }
    allContentfulProduct(
      filter: { country: { elemMatch: { code: { eq: $countryCode } } } }
    ) {
      nodes {
        name
        faq {
          title
          slug
          content {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                title
                description
                gatsbyImageData(width: 800)
                __typename
              }
            }
          }
        }
      }
    }
  }
`;

export default FaqsTemplate;
