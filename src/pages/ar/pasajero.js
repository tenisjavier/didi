import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import PaxHero from "../../components/ar/PaxHero";
import PaxColumns from "../../components/ar/PaxColumns";
import SilderSection from "../../components/ar/SliderSection";
import PaxWhyDiDi from "../../components/ar/PaxWhyDiDi";
import PaxBanner from "../../components/ar/PaxBanner";
import HomeColumns from "../../components/ar/HomeColumns";

const Pasajero = ({ data }) => {
  const products = data.allContentfulProduct.nodes;
  return (
    <Layout>
      <PaxHero></PaxHero>
      <PaxColumns></PaxColumns>
      <SilderSection
        data={products}
        title="Hay un DiDi Para ti"
      ></SilderSection>
      <PaxWhyDiDi></PaxWhyDiDi>
      <PaxBanner></PaxBanner>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "ar" } } }
        category: { eq: "driver" }
      }
    ) {
      nodes {
        name
        description
        phone
        requirement {
          raw
        }
        image {
          gatsbyImageData
        }
        country {
          code
        }
      }
    }
  }
`;

export default Pasajero;
