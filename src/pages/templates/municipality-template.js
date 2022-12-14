import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FoodCityHero from "../../components/sections/FoodCityHero";
import FoodCityBannerCTA from "../../components/sections/FoodCityBannerCTA";
import FoodCityBannerCTA2 from "../../components/sections/FoodCityBannerCTA2";
import FoodCityBannerCTA3 from "../../components/sections/FoodCityBannerCTA3";
import FoodCityRestaurantCTA from "../../components/sections/FoodCityRestaurantCTA";
import FoodMunicipalityList from "../../components/sections/FoodMunicipalityList";
import FoodAppDownloads from "../../components/sections/FoodAppDownloads";

const FoodCity = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const itemsList = data.contentfulMunicipality;
  const name = data.contentfulMunicipality.name;

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

  return (
    <Layout
      title={`Pide Comida a Domicilio  en ${name} CDMX`}
      desc={`¿Qué se te antoja en este momento? Pide tu Comida a Domicilio en ${name} CDMX por DiDi Food y disfruta de los mejores restaurantes de Tláhuac, en minutos.`}
    >
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
      <FoodMunicipalityList data={itemsList}></FoodMunicipalityList>
      <FoodCityBannerCTA3
        data={data.contentfulMunicipality}
        image={foodCTA3Image}
      ></FoodCityBannerCTA3>
      <FoodAppDownloads images={foodDeliveryDownloadsImages}></FoodAppDownloads>
    </Layout>
  );
};

export default FoodCity;

export const query = graphql`
  query ($id: String) {
    contentfulMunicipality(id: { eq: $id }) {
      name
      slug
      city {
        name
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
