import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FaqHero from "../../../components/sections/FaqHero";
import FaqContent from "../../../components/sections/FaqContent";
import FaqList from "../../../components/sections/FaqList";

const FaqTemplate = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "au.HelpCenterHero.bgImage";
  })[0];
  const { title, content } = data.contentfulFaq;
  const productName =
    data.contentfulFaq.product != null ? data.contentfulFaq.product.name : "";
  const faqPax = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Riders Australia"
  );
  const faqExpress = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Express Australia"
  );
  const faqDeliveryRider = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Delivery Australia Rider"
  );
  const faqDeliveryDrv = data.allContentfulProduct.nodes.filter(
    (node) => node.name === "DiDi Delivery Australia"
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
        title={"More FAQ for Drivers"}
        faqs={faqExpress[0].faq}
      ></FaqList>
      <FaqList
        title={"More FAQ for Drivers"}
        faqs={faqExpress[0].faq}
      ></FaqList>
      <FaqList title={"More FAQ for Riders"} faqs={faqPax[0].faq}></FaqList>
      <FaqList
        title={"More FAQ DiDi Delivery Rider"}
        faqs={faqDeliveryRider[0].faq}
      ></FaqList>
      <FaqList
        title={"More FAQ DiDi Delivery"}
        faqs={faqDeliveryDrv[0].faq}
      ></FaqList>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    allContentfulAsset(
      filter: { title: { regex: "/(au.HelpCenterHero.bgImage)/" } }
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
      filter: { country: { elemMatch: { code: { eq: "au" } } } }
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
