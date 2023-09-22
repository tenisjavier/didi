import React, { useState } from "react";

import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import BlogHero from "../../../../components/sections/Card/BlogHero";
import TasasCTA from "../../../../components/sections/Card/TasasCTA";
import CreditCardFAQ from "../../../../components/sections/Card/CreditCardFAQ";

const CreditBlog = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faqs = data.allContentfulFaq.nodes;

  const BlogHeroImage = images.filter((image) => {
    return image.title === "mx.CreditBlogHero.image";
  })[0];
  const TasasCTAImage = images.filter((image) => {
    return image.title === "mx.CreditBlogCard.image";
  })[0];

  return (
    <Layout>
      <BlogHero
        image={BlogHeroImage}
      ></BlogHero>
      <TasasCTA
        image={TasasCTAImage}
      ></TasasCTA>
      <CreditCardFAQ data={faqs}></CreditCardFAQ>
    </Layout>
  );
};

export default CreditBlog;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.CreditBlogHero.image)|(mx.CreditBlogCard.image)/"
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
