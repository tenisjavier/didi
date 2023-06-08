import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FoodCityHero from "../../components/sections/FoodCityHero";
import FoodCityBannerCTA from "../../components/sections/FoodCityBannerCTA";
import FoodCityBannerCTA2 from "../../components/sections/FoodCityBannerCTA2";
import FoodCityBannerCTA3 from "../../components/sections/FoodCityBannerCTA3";
import FoodCityRestaurantCTA from "../../components/sections/FoodCityRestaurantCTA";
import FoodMunicipalityList from "../../components/sections/FoodMunicipalityList";
import FoodNeighborhoodList from "../../components/sections/FoodNeighborhoodList";
import FoodFAQCities from "../../components/sections/FoodFAQCities";
import FoodAppDownloads from "../../components/sections/FoodAppDownloads";
import SmsCTA from "../../components/sections/SmsCTA"
import { QRCodeSVG } from "qrcode.react";

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
  const foodSMSCTA = images.filter((image) => {
    return image.title === "mx.FoodSMSCTA.image";
  })[0];
  const foodDeliveryDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodDeliveryDownloads.image") !== -1;
  });
  const customBreadcrumb = [
    {
      link: `https://web.didiglobal.com/mx/food/`,
      text: "Food",
    },
    {
      link: `https://web.didiglobal.com/mx/food/ciudad/${citySlug}`,
      text: cityName,
    },
    {
      link: "#",
      text: name,
    },
  ];

  const [QRUrl, setQRUrl] = useState(
    "https://global-food-eater.onelink.me/4B2F/QRCODE"
  );
  const qr = (
    <QRCodeSVG
      value={QRUrl}
    ></QRCodeSVG>
  );

  // useEffect(() => {
  //   const btnPrimary = document.getElementsByClassName("btn-primary")[0];
  //   if (btnPrimary && btnPrimary.getElementsByTagName("a")[0]) {
  //     setQRUrl(btnPrimary.getElementsByTagName("a")[0].href);
  //   }
  // }, []);

  return (
    <Layout
      title={`Pide Comida a Domicilio  en ${name} CDMX `}
      desc={`¿Qué se te antoja en este momento? Pide tu Comida a Domicilio en ${name} CDMX por DiDi Food y disfruta de los mejores restaurantes de Tláhuac, en minutos.`}
      customBreadcrumb={customBreadcrumb}
      schema="faq"
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
      <FoodNeighborhoodList data={neighbourhoods}></FoodNeighborhoodList>
      <div className="block lg:hidden xl:hidden">
        <FoodAppDownloads images={foodDeliveryDownloadsImages}></FoodAppDownloads>
      </div>
      <div className="hidden lg:block xl:block">
        <SmsCTA image={foodSMSCTA} qr={qr}></SmsCTA>
      </div>
      <FoodFAQCities data={data.contentfulMunicipality.city}></FoodFAQCities>
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
    allContentfulMunicipality(
      filter: { id: { ne: $id }, city: { country: { code: { eq: "mx" } } } }
    ) {
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
          regex: "/(mx.FoodHero.bgImage)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodDeliveryDownloads.image)|(mx.FoodCTA.image)|(mx.FoodSMSCTA.image)/"
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
