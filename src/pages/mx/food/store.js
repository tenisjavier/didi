import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodBusinessHero from "../../../components/sections/FoodBusinessHero";
import FoodBusinessColumns from "../../../components/sections/FoodBusinessColumns";
import FoodBusinessDownloads from "../../../components/sections/FoodBusinessDownloads";
import FoodCityList from "../../../components/sections/FoodCityList";
import RestaurantSocialColumns from "../../../components/sections/RestaurantSocialColumns";

const FoodBusiness = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const foodHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodBusinessHero.bgImage";
  })[0];
  const foodBusinessColumnsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodBusinessColumns.image") !== -1;
  });
  const foodBusinessDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodBusinessDownloads.image") !== -1;
  });
  const socialImages = images.filter((image) => {
    return image.title.indexOf("mx.DiDiRestaurantSocial.image") !== -1;
  });
  const cities = data.allContentfulCity.nodes;
  const filteredCities = cities.filter((city) => {
    return city.restaurant != null;
  });
  console.log(socialImages);
  return (
    <Layout>
      <FoodBusinessHero bgImage={foodHeroBgImage}></FoodBusinessHero>
      <FoodBusinessColumns
        images={foodBusinessColumnsImages}
      ></FoodBusinessColumns>
      <FoodBusinessDownloads
        images={foodBusinessDownloadsImages}
      ></FoodBusinessDownloads>
      <FoodCityList data={filteredCities}></FoodCityList>
      <RestaurantSocialColumns
        images={socialImages.reverse()}
      ></RestaurantSocialColumns>
    </Layout>
  );
};

export default FoodBusiness;

export const query = graphql`
  query ($language: String!) {
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
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FoodBusinessHero.bgImage)|(mx.FoodBusinessColumns.image)|(mx.FoodBusinessDownloads.image)|(mx.DiDiRestaurantSocial.image)/"
        }
      }
      sort: { fields: title }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "cl" } } }
        category: { eq: "food" }
        name: { eq: "Food Business" }
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
    allContentfulCity(
      filter: { country: { code: { eq: "mx" } } }
      sort: { fields: name }
    ) {
      nodes {
        name
        slug
        image {
          gatsbyImageData(width: 400)
          description
        }
        restaurant {
          name
        }
      }
    }
  }
`;
