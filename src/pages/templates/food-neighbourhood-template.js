import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FoodCityHero from "../../components/sections/FoodCityHero";
import FoodCityBannerCTA from "../../components/sections/FoodCityBannerCTA";
import FoodCityBannerCTA2 from "../../components/sections/FoodCityBannerCTA2";
import FoodCityBannerCTA3 from "../../components/sections/FoodCityBannerCTA3";
import FoodCityRestaurantCTA from "../../components/sections/FoodCityRestaurantCTA";
import FoodNeighborhoodList from "../../components/sections/FoodNeighborhoodList";
import FoodAppDownloads from "../../components/sections/FoodAppDownloads";

const FoodCity = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const itemsList = data.allContentfulNeighbourhood.nodes.name
    ? data.allContentfulNeighbourhood.nodes.municipality.neighbourhood.name
    : [];
  const name = data.contentfulNeighbourhood.name;
  const municipalityName = data.contentfulNeighbourhood.municipality.name;
  const cityName = data.contentfulNeighbourhood.municipality.city.name;
  const citySlug = data.contentfulNeighbourhood.municipality.city.slug;
  const municipalitySlug = data.contentfulNeighbourhood.municipality.slug;
  const customBreadcrumb = [
    {
      link: `https://web.didiglobal.com/mx/food/`, 
      text: "Food"
    },
    {
      link: `https://web.didiglobal.com/mx/food/${citySlug}`,
      text: cityName
    },
    {
      link: `https://web.didiglobal.com/mx/food/${citySlug}/${municipalitySlug}`,
      text: municipalityName
    },
    {
      link: "#",
      text: name
    }
  ]

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
      customBreadcrumb={customBreadcrumb}
    >
      <FoodCityHero
        bgImage={foodHeroBgImage}
        data={data.contentfulNeighbourhood}
      ></FoodCityHero>
      <FoodCityBannerCTA
        data={data.contentfulNeighbourhood}
        image={foodBusinessCTAImage}
      ></FoodCityBannerCTA>
      <FoodCityRestaurantCTA
        data={data.contentfulNeighbourhood}
        image={foodDeliveryCTAImage}
      ></FoodCityRestaurantCTA>
      <FoodCityBannerCTA2
        data={data.contentfulNeighbourhood}
        image={foodDeliveryCTAImage}
      ></FoodCityBannerCTA2>
      <FoodNeighborhoodList data={itemsList}></FoodNeighborhoodList>
      <FoodCityBannerCTA3
        data={data.contentfulNeighbourhood}
        image={foodCTA3Image}
      ></FoodCityBannerCTA3>
      <FoodAppDownloads images={foodDeliveryDownloadsImages}></FoodAppDownloads>
    </Layout>
  );
};

export default FoodCity;

export const query = graphql`
  query ($id: String) {
    allContentfulNeighbourhood (filter: {id: {ne: $id}, city: {country: {code: {eq: "mx"}}}}) {
    nodes {
      name
      municipality {
        name
        slug
        neighbourhood {
          name
        }
        city {
          name
          slug
        }
      }
      city {
        slug
        name
      }
    }
  }
    contentfulNeighbourhood(id: { eq: $id }) {
      name
      slug
      city {
        slug
        name
      }
      municipality {
        slug
        name
        neighbourhood {
          name
        }
        city{
          slug
          name
          country {
            code
          }
        }
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
