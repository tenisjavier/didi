import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import TermsAndConditionsContent from "../../components/sections/TermsAndConditionsContent";
import PoliciesHero from "../../components/sections/PoliciesHero";

const Policies = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const name =
    data.contentfulLegal.name != null ? data.contentfulLegal.name : "";
  const policiesBgImage = images.filter((image) => {
    return image.title === "ru.AboutUsHero.bgImage";
  })[0];

  return (
    <Layout>
      <PoliciesHero bgImage={policiesBgImage} title={name}></PoliciesHero>
      <TermsAndConditionsContent data={data}></TermsAndConditionsContent>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    allContentfulAsset(filter: { title: { in: ["ru.AboutUsHero.bgImage"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    contentfulLegal(id: { eq: $id }) {
      name
      slug
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 1000)
            __typename
          }
        }
      }
    }
  }
`;

export default Policies;
