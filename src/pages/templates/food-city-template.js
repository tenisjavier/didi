import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FoodCityHero from "../../components/sections/FoodCityHero";
import FoodCityBannerCTA from "../../components/sections/FoodCityBannerCTA";
import FoodCityBannerCTA2 from "../../components/sections/FoodCityBannerCTA2";
import FoodCityBannerCTA3 from "../../components/sections/FoodCityBannerCTA3";
import FoodCityRestaurantCTA from "../../components/sections/FoodCityRestaurantCTA";
import FoodCityList from "../../components/sections/FoodCityList";
import FoodFAQCities from "../../components/sections/FoodFAQCities";
import FoodAppDownloads from "../../components/sections/FoodAppDownloads";

const FoodCity = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const itemsList = data.allContentfulCity.nodes;
  const name = data.contentfulCity.name;
  const countryCode = data?.contentfulCity?.country?.code;

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
  const foodDeliveryDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodDeliveryDownloads.image") !== -1;
  });

  const customBreadcrumb = [
    {
      link: `https://web.didiglobal.com/${countryCode}/food/`,
      text: "Food",
    },
    {
      link: "#",
      text: name,
    },
  ];

  return (
    <Layout
      title={`Pide Comida a Domicilio  en ${name}`}
      desc={`¿Qué se te antoja en este momento? Pide tu Comida a Domicilio en ${name} por DiDi Food y disfruta de los mejores restaurantes de Tláhuac, en minutos.`}
      customBreadcrumb={customBreadcrumb}
      schema="faq"
    >
      <FoodCityHero
        bgImage={foodHeroBgImage}
        data={data.contentfulCity}
      ></FoodCityHero>
      <FoodCityBannerCTA
        data={data.contentfulCity}
        image={foodBusinessCTAImage}
      ></FoodCityBannerCTA>
      <FoodCityRestaurantCTA
        data={data.contentfulCity}
        image={foodDeliveryCTAImage}
      ></FoodCityRestaurantCTA>
      <FoodCityBannerCTA2
        data={data.contentfulCity}
        image={foodDeliveryCTAImage}
      ></FoodCityBannerCTA2>
      {itemsList && itemsList?.length > 0 ? (
        <FoodCityList data={itemsList}></FoodCityList>
      ) : (
        <></>
      )}
      <FoodCityBannerCTA3
        data={data.contentfulCity}
        image={foodCTA3Image}
      ></FoodCityBannerCTA3>
      <div className="block lg:hidden xl:hidden">
        <FoodAppDownloads
          images={foodDeliveryDownloadsImages}
        ></FoodAppDownloads>
      </div>
      <FoodFAQCities data={data.contentfulCity}></FoodFAQCities>
    </Layout>
  );
};

export default FoodCity;

export const query = graphql`
  query ($id: String, $countryCode: String) {
    allContentfulCity(
      filter: {
        id: { ne: $id }
        country: { code: { eq: $countryCode } }
        product: { elemMatch: { category: { eq: "food" } } }
      }
    ) {
      nodes {
        id
        name
        slug
        image {
          gatsbyImageData(width: 400)
          description
        }
      }
    }
    contentfulCity(id: { eq: $id }) {
      name
      slug
      country {
        code
      }
    }
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FoodHero.bgImage)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodCTA.image)|(mx.FoodDeliveryDownloads.image)/"
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
