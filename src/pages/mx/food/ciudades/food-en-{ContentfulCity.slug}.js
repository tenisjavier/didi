import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodCityHero from "../../../../components/sections/FoodCityHero";
import FoodCityList from "../../../../components/sections/FoodCityList";
import FoodBusinessCTA from "../../../../components/sections/FoodBusinessCTA";
import FoodDeliveryCTA from "../../../../components/sections/FoodDeliveryCTA";
import FoodBusinessDownloads from "../../../../components/sections/FoodBusinessDownloads";
import FoodCityBannerCTA from "../../../../components/sections/FoodCityBannerCTA";
import FoodCityRestaurantCTA from "../../../../components/sections/FoodCityRestaurantCTA";
import { QRCodeSVG } from "qrcode.react";
import SilderSection from "../../../../components/sections/SliderSection"


const FoodCity = ({ data }) => {
  const cities = data.contentfulCountry.city;
  const { name } = data.contentfulCity;
  const images = data.allContentfulAsset.nodes;
  const restaurant = data.contentfulCity.restaurant;

  const filteredCities = cities.filter((city) => {
    return city.restaurant != null
  })


  const foodBusinessCTAImage = images.filter((image) => {
    return image.title === "mx.FoodBusinessCTA.image";
  })[0];
  const foodDeliveryCTAImage = images.filter((image) => {
    return image.title === "mx.FoodDeliveryCTA.image";
  })[0];
  const foodBusinessDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodBusinessDownloads.image") !== -1;
  });
  const [QRUrl, setQRUrl] = useState(
    "https://global-food-eater.onelink.me/4B2F/1059cbff?af_qr=true"
  );
  const qr = (
    <QRCodeSVG
      value={QRUrl}
      size={300}
      height={300}
      width={300}
      bgColor="#ffffff"
      className="z-10 m-4 w-100"
    ></QRCodeSVG>
  );

  useEffect(() => {
    setQRUrl(
      document
        .getElementsByClassName("btn-light")[0]
        .getElementsByTagName("a")[0].href
    );
  }, []);

  return (
    <Layout>
      <FoodCityHero image={qr} data={data.contentfulCity}></FoodCityHero>
      <SilderSection
        data={restaurant}
        title={`Restaurantes a domicilio ${name} en cerca de tí`}
      ></SilderSection>
      <FoodCityBannerCTA data={data.contentfulCity} image={foodBusinessCTAImage}></FoodCityBannerCTA>
      <FoodCityRestaurantCTA data={data.contentfulCity} image={foodDeliveryCTAImage}></FoodCityRestaurantCTA>
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
    locales: allLocale(filter: { language: { eq: $language } }) {
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
    allContentfulRestaurant {
      nodes {
        city {
          name
        }
      }
    }
    allContentfulCity{
      nodes {
        country {
          city {
            name
            restaurant {
              name
              image{
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "mx" } } }
        category: { eq: "driver" }
      }
    ) {
      nodes {
        name
        description
        phone
        requirement {
          raw
        }
        image {
          gatsbyImageData
        }
        country {
          code
        }
      }
    }
    allContentfulAsset(filter: { title:
      { regex: "/(mx.FoodHero.bgImage)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodBusinessDownloads.image)/"}
     }) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    contentfulOffice(city: { id: { eq: $id } }) {
      name
      address
      phone
      openHours
      photos {
        gatsbyImageData
      }
    }

    allContentfulRequirement(
      filter: { city: { elemMatch: { id: { eq: $id } } } }
    ) {
      nodes {
        name
        requirement {
          raw
        }
      }
    }
    allContentfulPlace(
      filter: { city: { id: { eq: $id } }, primary: { eq: true } }
    ) {
      nodes {
        name
        address
        image {
          gatsbyImageData
        }
        city {
          name
          slug
        }
      }
    }
    contentfulCountry(code: { eq: "mx" }) {
      name
      city {
        name
        slug
        restaurant {
          name
        }
      }
    }
  }
`;
