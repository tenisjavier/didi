import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodCityHero from "../../../../components/sections/FoodCityHero";
import FoodCityList from "../../../../components/sections/FoodCityList";
import FoodBusinessCTA from "../../../../components/sections/FoodBusinessCTA";
import FoodDeliveryCTA from "../../../../components/sections/FoodDeliveryCTA";
import FoodBusinessDownloads from "../../../../components/sections/FoodBusinessDownloads";
import FoodCityBannerCTA from "../../../../components/sections/FoodCityBannerCTA";
import FoodCityRestaurantCTA from "../../../../components/sections/FoodCityRestaurantCTA";
import SilderSection from "../../../../components/sections/SliderSection";

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
  const foodBusinessDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodBusinessDownloads.image") !== -1;
  });

  return (
    <Layout>
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
      <FoodBusinessCTA image={foodBusinessCTAImage}></FoodBusinessCTA>
      <FoodDeliveryCTA image={foodDeliveryCTAImage}></FoodDeliveryCTA>
      <FoodBusinessDownloads
        images={foodBusinessDownloadsImages}
      ></FoodBusinessDownloads>
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
    contentfulCity(id: { eq: $id }) {
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
      filter: {
        title: {
          regex: "/(mx.FoodHero.bgImage)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodBusinessDownloads.image)/"
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
