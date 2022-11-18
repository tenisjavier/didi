import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FaqHero from "../../../components/sections/FaqHero";
import FaqContent from "../../../components/sections/FaqContent";
import FaqList from "../../../components/sections/FaqList";

const FaqTemplate = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "mx.HelpCenterHero.bgImage";
  })[0];
  const { title, content } = data.contentfulFaq;
  const productName =
    data.contentfulFaq.product != null ? data.contentfulFaq.product.name : "";

  const faqDrv = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Express México"
  );
  return (
    <Layout>
      <FaqHero
        title={title}
        desc={productName}
        bgImage={helpCenterBgImage}
      ></FaqHero>
      <FaqContent title={title} content={content}></FaqContent>
      <FaqList
        title={"Principales preguntas de conductores DiDi"}
        faqs={faqDrv[0].faq}
      ></FaqList>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
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
      filter: { country: { elemMatch: { code: { eq: "mx" } } } }
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

export default FaqTemplate;
