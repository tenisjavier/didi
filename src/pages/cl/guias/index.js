import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import GuidesColumns from "../../../components/sections/GuidesColumns";
import DrvHero from "../../../components/sections/DrvHero";

export const query = graphql`
  query {
    allContentfulGuide {
      nodes {
        title
        excerpt
        featuredImage {
          gatsbyImageData
        }
      }
    }
  }
`;

const Guias = ({ data }) => {
  return (
    <Layout>
      <DrvHero></DrvHero>
      <GuidesColumns data={data}></GuidesColumns>
    </Layout>
  );
};

export default Guias;
