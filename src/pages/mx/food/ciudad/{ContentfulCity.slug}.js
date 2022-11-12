import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodCityHero from "../../../../components/sections/FoodCityHero";
import FoodCityList from "../../../../components/sections/FoodCityList";
import FoodCityBannerCTA from "../../../../components/sections/FoodCityBannerCTA";
import FoodCityBannerCTA2 from "../../../../components/sections/FoodCityBannerCTA2";
import FoodCityBannerCTA3 from "../../../../components/sections/FoodCityBannerCTA3";
import FoodCityRestaurantCTA from "../../../../components/sections/FoodCityRestaurantCTA";
import SilderSection from "../../../../components/sections/SliderSection";
import FoodFAQCities from "../../../../components/sections/FoodFAQCities";

const FoodCity = ({ data }) => {
  const cities = data.allContentfulCity.nodes;
  const { name } = data.contentfulCity;
  const images = data.allContentfulAsset.nodes;
  const restaurant = data.contentfulCity.restaurant;

  const filteredCities = cities.filter((city) => {
    return city.restaurant != null;
  });

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
    <Layout
      title={`Comida a Domicilio  en ${name} cerca de mí`}
      desc={`Descubre ✌ mejores ofertas de comida a domicilio en restaurantes de ${name} cerca de tí con entrega rápida y económica ⭐⭐⭐ Pidelo ya con DiDiFood app`}
    >
      <FoodCityHero
        bgImage={foodHeroBgImage}
        data={data.contentfulCity}
      ></FoodCityHero>
      {restaurant && (
        <SilderSection
          data={restaurant}
          title={`Restaurantes a domicilio ${name} en cerca de tí`}
        ></SilderSection>
      )}
      <FoodCityBannerCTA
        data={data.contentfulCity}
        image={foodBusinessCTAImage}
      ></FoodCityBannerCTA>
      <FoodCityRestaurantCTA
        data={data.contentfulCity}
        image={foodDeliveryCTAImage}
      ></FoodCityRestaurantCTA>
      <FoodCityList data={filteredCities}></FoodCityList>
      <FoodCityBannerCTA2
        data={data.contentfulCity}
        image={foodDeliveryCTAImage}
      ></FoodCityBannerCTA2>
      <FoodCityBannerCTA3
        data={data.contentfulCity}
        image={foodCTA3Image}
      ></FoodCityBannerCTA3>
      <FoodFAQCities city={name}></FoodFAQCities>
    </Layout>
  );
};

export default FoodCity;

export const query = graphql`query ($id: String, $language: String!) {
  locales: allLocale(filter: {ns: {in: ["food"]}, language: {eq: $language}}) {
    edges {
      node {
        ns
        data
        language
      }
    }
  }
  contentfulCity(id: {eq: $id}) {
    name
    slug
    product {
      name
      description
      image {
        gatsbyImageData
      }
      country {
        code
      }
    }
    restaurant {
      city {
        name
      }
      name
      image {
        gatsbyImageData
      }
    }
    geometry {
      lat
      lon
    }
  }
  allContentfulAsset(
    filter: {title: {regex: "/(mx.FoodHero.bgImage)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodCTA.image)/"}}
  ) {
    nodes {
      id
      title
      description
      gatsbyImageData
    }
  }
  allContentfulCity(filter: {country: {code: {eq: "mx"}}}, sort: {name: ASC}) {
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
}`;
