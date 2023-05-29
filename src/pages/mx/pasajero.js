import React, {useState, useEffect} from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import PaxHero from "../../components/sections/PaxHero";
import PaxWhyDiDi from "../../components/sections/PaxWhyDiDi";
import PaxColumns from "../../components/sections/PaxColumns";
import SilderSection from "../../components/sections/SliderSection";
import PaxBanner from "../../components/sections/PaxBanner";
import HomeColumns from "../../components/sections/HomeColumns";
import { QRCodeSVG } from "qrcode.react";
import SmsCTA from "../../components/sections/SmsCTA";
import FoodAppDownloads from "../../components/sections/FoodAppDownloads";

const Pasajero = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "mx.PaxHero.bgImage";
  })[0];
  const paxWhyDiDiImage = images.filter((image) => {
    return image.title === "mx.PaxWhyDiDi.image";
  })[0];
  const products = data.allContentfulProduct.nodes;
  const ridesSMSCTA = images.filter((image) => {
    return image.title === "mx.FoodSMSCTA.image";
  })[0];
  const foodDeliveryDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodDeliveryDownloads.image") !== -1;
  });

  const [QRUrl, setQRUrl] = useState(
    "https://global-rides-passenger.onelink.me/xNlo/QRCODE"
  );
  const qr = (
    <QRCodeSVG
      value={QRUrl}
    ></QRCodeSVG>
  );

  useEffect(() => {
    const btnPrimary = document.getElementsByClassName("btn-primary")[0];
    if (btnPrimary && btnPrimary.getElementsByTagName("a")[0]) {
      setQRUrl(btnPrimary.getElementsByTagName("a")[0].href);
    }
  }, []);

  return (
    <Layout>
      <PaxHero bgImage={paxHeroBgImage}></PaxHero>
      <div className="hidden lg:block xl:block">
        <SmsCTA image={ridesSMSCTA} qr={qr} smsType="rides"></SmsCTA>
      </div>
      <div className="block lg:hidden xl:hidden">
        <FoodAppDownloads
          images={foodDeliveryDownloadsImages}
        ></FoodAppDownloads>
      </div>
      <PaxColumns></PaxColumns>
      <SilderSection
        data={products}
        title="Hay un DiDi Para ti"
      ></SilderSection>
      <PaxWhyDiDi image={paxWhyDiDiImage}></PaxWhyDiDi>
      <PaxBanner></PaxBanner>
      <HomeColumns></HomeColumns>
      <div className="hidden lg:block xl:block">
        <SmsCTA image={ridesSMSCTA} qr={qr} smsType="rides"></SmsCTA>
      </div>
      <div className="block lg:hidden xl:hidden">
        <FoodAppDownloads
          images={foodDeliveryDownloadsImages}
        ></FoodAppDownloads>
      </div>
    </Layout>
  );
};

export default Pasajero;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { in: [ "mx.PaxHero.bgImage", "mx.PaxWhyDiDi.image", "mx.FoodSMSCTA.image", "mx.FoodDeliveryDownloads.image"] } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
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
        descriptionForPax
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
  }
`;
