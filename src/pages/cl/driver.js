import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import DrvWhyDiDi from "../../components/sections/DrvWhyDiDi";
import DrvVideoGrid from "../../components/sections/DrvVideoGrid";
import DrvBanner from "../../components/sections/DrvBanner";
import DrvFeatures from "../../components/sections/DrvFeatures";
import HomeColumns from "../../components/sections/PaxColumns";
import SilderSection from "../../components/sections/SliderSection";
import Requirements from "../../components/sections/Requirements";
import KnowMoreBanner from "../../components/sections/KnowMoreBanner";

const Driver = ({ data }) => {
  const products = data.allContentfulProduct.nodes;
  return (
    <Layout>
      <DrvHero></DrvHero>
      <DrvWhyDiDi></DrvWhyDiDi>
      <DrvVideoGrid></DrvVideoGrid>
      <DrvBanner></DrvBanner>
      <DrvFeatures></DrvFeatures>
      <SilderSection title="Hay un DiDi Para ti"></SilderSection>
      <Requirements data={products}></Requirements>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "cl" } } }
        category: { eq: "driver" }
      }
    ) {
      nodes {
        name
        phone
        requirement {
          raw
        }
      }
    }
  }
`;

export default Driver;
