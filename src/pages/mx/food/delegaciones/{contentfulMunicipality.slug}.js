import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodCityHero from "../../../../components/sections/FoodCityHero";
import FoodCityBannerCTA from "../../../../components/sections/FoodCityBannerCTA";
import FoodCityBannerCTA2 from "../../../../components/sections/FoodCityBannerCTA2";
import FoodCityBannerCTA3 from "../../../../components/sections/FoodCityBannerCTA3";
import FoodCityRestaurantCTA from "../../../../components/sections/FoodCityRestaurantCTA";
import FoodMunicipalityList from "../../../../components/sections/FoodMunicipalityList";

const FoodCity = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const cities = data.allContentfulMunicipality.nodes;

  const foodHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodHero.bgImage";
  })[0];
  const foodBusinessCTAImage = images.filter((image) => {
    return image.title === "mx.FoodBusinessCTA.image";
  })[0];
  const foodDeliveryCTAImage = images.filter((image) => {
    return image.title === "mx.FoodDeliveryCTA.image";
  })[0];
  const foodCTA3Image = images.filter((image) => {
    return image.title === "mx.FoodCTA.image";
  })[0];

  return (
    <Layout>
      <FoodCityHero
        bgImage={foodHeroBgImage}
        data={data.contentfulMunicipality}
      ></FoodCityHero>
      <FoodCityBannerCTA
        data={data.contentfulMunicipality}
        image={foodBusinessCTAImage}
      ></FoodCityBannerCTA>
      <FoodCityRestaurantCTA
        data={data.contentfulMunicipality}
        image={foodDeliveryCTAImage}
      ></FoodCityRestaurantCTA>
      <FoodCityBannerCTA2
        data={data.contentfulMunicipality}
        image={foodDeliveryCTAImage}
      ></FoodCityBannerCTA2>
      <FoodMunicipalityList data={cities}></FoodMunicipalityList>
      <FoodCityBannerCTA3
        data={data.contentfulMunicipality}
        image={foodCTA3Image}
      ></FoodCityBannerCTA3>
    </Layout>
  );
};

export default FoodCity;

export const query = graphql`
  query ($id: String, $language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["food"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    contentfulMunicipality(id: { eq: $id }){
      name
      slug
    }
    allContentfulMunicipality{
      nodes {
        name
        slug
      }
    }
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FoodHero.bgImage)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodCTA.image)/"
        }
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
