import React, {useState, useEffect} from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FoodCityHero from "../../components/sections/FoodCityHero";
import SmsCTA from "../../components/sections/SmsCTA";
import FoodAppDownloads from "../../components/sections/FoodAppDownloads";
import { QRCodeSVG } from "qrcode.react";

const FoodCity = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const name = data.contentfulCity.name;

  const foodHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodHero.bgImage";
  })[0];
  const foodDeliveryDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodDeliveryDownloads.image") !== -1;
  });
  const foodSMSCTA = images.filter((image) => {
    return image.title === "mx.FoodSMSCTA.image";
  })[0];

  const customBreadcrumb = [
    {
      link: `https://web.didiglobal.com/mx/food/`,
      text: "Food",
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

  useEffect(() => {
    const btnPrimary = document.getElementsByClassName("btn-primary")[0];
    if (btnPrimary && btnPrimary.getElementsByTagName("a")[0]) {
      setQRUrl(btnPrimary.getElementsByTagName("a")[0].href);
    }
  }, []);

  return (
    <Layout
      index={false}
      title={`Pide Comida a Domicilio  en ${name} CDMX`}
      desc={`¿Qué se te antoja en este momento? Pide tu Comida a Domicilio en ${name} CDMX por DiDi Food y disfruta de los mejores restaurantes de Tláhuac, en minutos.`}
      customBreadcrumb={customBreadcrumb}
      schema="faq"
    >
      <FoodCityHero
        bgImage={foodHeroBgImage}
        data={data.contentfulCity}
      ></FoodCityHero>
      <div className="block lg:hidden xl:hidden">
        <FoodAppDownloads
          images={foodDeliveryDownloadsImages}
        ></FoodAppDownloads>
      </div>
      <div className="hidden lg:block xl:block">
        <SmsCTA image={foodSMSCTA} qr={qr} type={"food"}></SmsCTA>
      </div>
    </Layout>
  );
};

export default FoodCity;

export const query = graphql`
  query ($id: String) {
    allContentfulCity(
      filter: { id: { ne: $id }, country: { code: { eq: "mx" } } }
    ) {
      nodes {
        id
        name
        slug
      }
    }
    contentfulCity(id: { eq: $id }) {
      name
      slug
    }
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FoodHero.bgImage)|(mx.FoodBusinessCTA.image)|(mx.FoodDeliveryCTA.image)|(mx.FoodCTA.image)|(mx.FoodDeliveryDownloads.image)|(mx.FoodSMSCTA.image)/"
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
