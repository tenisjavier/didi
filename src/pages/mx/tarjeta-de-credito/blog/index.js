import React from "react";

import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import DiDiCreditBlogHero from "../../../../components/sections/CreditCard/DiDiCreditBlogHero";
import DiDiCreditWhy from "../../../../components/sections/CreditCard/DiDiCreditWhy";
import DiDiCreditFAQ from "../../../../components/sections/CreditCard/DiDiCreditFAQ";

const CreditBlog = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;

  const BlogHeroImage = images.filter((image) => {
    return image.title === "mx.CreditBlogHero.image";
  })[0];
  const cardWhyImage = images.filter((image) => {
    return image.title === "mx.CreditFaqCard.image";
  })[0];

  return (
    <Layout>
      <DiDiCreditBlogHero
        image={BlogHeroImage}
      ></DiDiCreditBlogHero>
      {/* <DiDiCreditWhy image={cardWhyImage}></DiDiCreditWhy> */}
      <DiDiCreditFAQ data={faqs}></DiDiCreditFAQ>
    </Layout>
  );
};

export default CreditBlog;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.CreditBlogHero.image)|(mx.CreditFaqCard.image)/"
        }
      }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulFaq (filter: {
          country: {
            code: {eq: "mx"}
          }
          type: {
            eq: "card"
          }
        }){
        nodes {
          slug
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
        }
      }
  }
`;
