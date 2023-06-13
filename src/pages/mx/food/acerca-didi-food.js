import React, {useState, useEffect} from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FoodAboutHero from "../../../components/sections/FoodAboutHero";
import FoodAboutDeliveryCTA from "../../../components/sections/FoodAboutDeliveryCTA";
import FoodAboutCTA from "../../../components/sections/FoodAboutCTA";
import FoodAppDownloads from "../../../components/sections/FoodAppDownloads";
import SmsCTA from "../../../components/sections/SmsCTA"
import { QRCodeSVG } from "qrcode.react";

const FoodDelivery = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const foodAboutHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodAboutHero.bgImage";
  })[0];
  const foodAboutDeliveryCTAImage = images.filter((image) => {
    return image.title === "mx.FoodAboutDeliveryCTA.image";
  })[0];
  const foodAboutCTAImage = images.filter((image) => {
    return image.title === "mx.FoodAboutCTA.image";
  })[0];
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
      <FoodAboutHero bgImage={foodAboutHeroBgImage}></FoodAboutHero>
      <FoodAboutDeliveryCTA
        image={foodAboutDeliveryCTAImage}
      ></FoodAboutDeliveryCTA>
      <FoodAboutCTA image={foodAboutCTAImage}></FoodAboutCTA>
      <div className="block lg:hidden xl:hidden">
        <FoodAppDownloads images={foodDeliveryDownloadsImages}></FoodAppDownloads>
      </div>
      <div className="hidden lg:block xl:block">
        <SmsCTA image={foodSMSCTA} qr={qr}></SmsCTA>
      </div>
    </Layout>
  );
};

export default FoodDelivery;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "mx.FoodAboutHero.bgImage"
            "mx.FoodAboutDeliveryCTA.image"
            "mx.FoodAboutCTA.image"
            "mx.FoodSMSCTA.image"
            "mx.FoodDeliveryDownloads.image"
          ]
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