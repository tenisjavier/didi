import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import ContactHero from "../../components/sections/ContactHero";
import ContactColumns from "../../components/sections/ContactColumns";

const Contact = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "hk.HomeHero.bgImage";
  })[0];

  return (
    <Layout>
      <ContactHero bgImage={homeHeroBgImage}></ContactHero>
      <ContactColumns></ContactColumns>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: { in: ["hk.HomeHero.bgImage"] }
      }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;
