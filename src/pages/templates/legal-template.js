import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import TermsAndConditionsContent from "../../components/sections/TermsAndConditionsContent";
import PoliciesHero from "../../components/sections/PoliciesHero";

const Policies = ({ data }) => {
  console.log(data);
  const images = data.allContentfulAsset.nodes;
  const name = (data.contentfulLegal.name != null) ? data.contentfulLegal.name : "";
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
  query ($id: String!, $countryCode: String!, $language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulAsset(
      filter: { title: { in: ["ru.AboutUsHero.bgImage"] } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    contentfulLegal (id: {eq: $id}, country: {elemMatch: {code: {eq: $countryCode}}}){
      name
      slug
      content {
        raw
      }
    }
  }
`;

export default Policies;