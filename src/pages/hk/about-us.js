import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import AboutGlobalCTA from "../../components/sections/AboutGlobalCTA";

const Contact = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const aboutGlobalCTAimage = images.filter((image) => {
    return image.title === "hk.AboutGlobalCTA.image";
  })[0];

  return (
    <Layout sb={false}>
      <AboutGlobalCTA image={aboutGlobalCTAimage}></AboutGlobalCTA>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query {
    allContentfulAsset(filter: { title: { in: ["hk.AboutGlobalCTA.image"] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;
