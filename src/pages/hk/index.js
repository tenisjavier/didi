import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import HomeHeroBtn from "../../components/sections/HomeHeroBtn";
import CarModelColumns from "../../components/sections/CarModelColumns";
import StatsColumns from "../../components/sections/StatsColumns";

const Index = ({ data }) => {
  const images = data.allContentfulAsset.nodes;

  const HomeHeroBtnBgImage = images.filter((image) => {
    return image.title === "hk.HomeHero.bgImage";
  })[0];

  const carModelColumns = images.filter((image) => {
    return image.title === "hk.CarModelColumns.image";
  });

  return (
    <Layout>
      <HomeHeroBtn bgImage={HomeHeroBtnBgImage}></HomeHeroBtn>
      <CarModelColumns images={carModelColumns}></CarModelColumns>
      <StatsColumns></StatsColumns>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: { in: ["hk.HomeHero.bgImage", "hk.CarModelColumns.image"] }
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
