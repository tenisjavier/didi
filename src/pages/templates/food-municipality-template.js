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
import FoodNeighborhoodList from "../../components/sections/FoodNeighborhoodList";

const FoodCity = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const cities = data.allContentfulMunicipality.nodes;
  const neighbourhoods = data.allContentfulNeighbourhood.nodes;
  const name = data.contentfulMunicipality.name;
  const cityName = data.contentfulMunicipality.city.name;
  const citySlug = data.contentfulMunicipality.city.slug;

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
      link: `https://web.didiglobal.com/mx/food/`, 
      text: "Food"
    },
    {
      link: `https://web.didiglobal.com/mx/food/${citySlug}`,
      text: cityName
    },
    {
      link: "#",
      text: name
    }
  ]

  return (
    <Layout
      title={`Pide Comida a Domicilio  en ${name} CDMX `}
      desc={`¿Qué se te antoja en este momento? Pide tu Comida a Domicilio en ${name} CDMX por DiDi Food y disfruta de los mejores restaurantes de Tláhuac, en minutos.`}
      customBreadcrumb={customBreadcrumb}
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
      <FoodMunicipalityList data={cities}></FoodMunicipalityList>
      <FoodCityBannerCTA3
        data={data.contentfulMunicipality}
        image={foodCTA3Image}
      ></FoodCityBannerCTA3>
      <FoodAppDownloads images={foodDeliveryDownloadsImages}></FoodAppDownloads>
      <FoodNeighborhoodList data={neighbourhoods}></FoodNeighborhoodList>
    </Layout>
  );
};

export default FoodCity;

export const query = graphql`
  query ($id: String) {
    contentfulMunicipality(id: { eq: $id }) {
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
    allContentfulMunicipality (filter: {id: {ne: $id}, city: {country: {code: {eq: "mx"}}}}) {
      nodes {
        name
        slug
        neighbourhood {
          name
        }
        city {
          name
        }
      }
    }
    allContentfulNeighbourhood(
      filter: { municipality: { id: { eq: $id } } }
      sort: { name: ASC }
    ) {
      nodes {
        name
        slug
        municipality {
          name
        }
        city {
          name
        }
      }
    }
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FoodHero.bgImage)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodDeliveryDownloads.image)|(mx.FoodCTA.image)/"
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
