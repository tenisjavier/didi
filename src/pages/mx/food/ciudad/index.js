import React, {useState, useEffect} from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodHero from "../../../../components/sections/FoodHero";
import FoodCityList from "../../../../components/sections/FoodCityList";
import FoodBusinessCTA from "../../../../components/sections/FoodBusinessCTA";
import FoodDeliveryCTA from "../../../../components/sections/FoodDeliveryCTA";
import FoodBusinessDownloads from "../../../../components/sections/FoodBusinessDownloads";
import FoodAppDownloads from "../../../../components/sections/FoodAppDownloads";
import SmsCTA from "../../../../components/sections/SmsCTA"
import { QRCodeSVG } from "qrcode.react";

const Ciudades = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
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
  const cities = data.allContentfulCity.nodes;
  const filteredCities = cities.filter((city) => {
    return city.restaurant != null;
  });
  const foodSMSCTA = images.filter((image) => {
    return image.title === "mx.FoodSMSCTA.image";
  })[0];
  const foodDeliveryDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodDeliveryDownloads.image") !== -1;
  });

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
    <Layout>
      <FoodHero bgImage={drvHeroBgImage}></FoodHero>
      <FoodCityList data={filteredCities}></FoodCityList>
      <FoodBusinessCTA image={foodBusinessCTAImage}></FoodBusinessCTA>
      <FoodDeliveryCTA image={foodDeliveryCTAImage}></FoodDeliveryCTA>
      <FoodBusinessDownloads
        images={foodBusinessDownloadsImages}
      ></FoodBusinessDownloads>
      <div className="block lg:hidden xl:hidden">
        <FoodAppDownloads images={foodDeliveryDownloadsImages}></FoodAppDownloads>
      </div>
      <div className="hidden lg:block xl:block">
        <SmsCTA image={foodSMSCTA} qr={qr} smsType="food"></SmsCTA>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FoodHero.bgImage)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodBusinessDownloads.image)|(mx.FoodDeliveryDownloads.image)|(mx.FoodSMSCTA.image)/"
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
      sort: { name: ASC }
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

export default Ciudades;
