import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import FoodDeliveryHero from "../../../../components/sections/FoodDeliveryHero";
import FoodDeliveryColumns from "../../../../components/sections/FoodDeliveryColumns";
import FoodDeliveryDownloads from "../../../../components/sections/FoodDeliveryDownloads";
import FoodDeliveryStepsColumns from "../../../../components/sections/FoodDeliveryStepsColumns";
import PaxWhyDiDiRepartidor from "../../../../components/sections/PaxWhyDiDiRepartidor";
import RepartidorBanner from "../../../../components/sections/RepartidorBanner";
import PaxWhyDiDiRegistro from "../../../../components/sections/PaxWhyDiDiRegistro";
import RepartidorRegistroBanner from "../../../../components/sections/RepartidorRegistroBanner";
import RequirementsRepartidor from "../../../../components/sections/RequirementsRepartidor";
import DiDiRepartidoresFAQs from "../../../../components/sections/DiDiRepartidoresFAQs";
import KnowMoreBanner from "../../../../components/sections/KnowMoreBanner";

const FoodDelivery = ({ data, location }) => {
  const images = data.allContentfulAsset.nodes;
  const foodDeliveryHeroBgImage = images.filter((image) => {
    return image.title === "mx.FoodDeliveryHero.bgImage";
  })[0];
  const foodDeliveryHeroMobileBgImage = images.filter((image) => {
    return image.title === "mx.FoodDeliveryHeroMobile.bgImage";
  })[0];
  const foodDeliveryColumnsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodDeliveryColumns.image") !== -1;
  });
  const foodDeliveryDownloadsImages = images.filter((image) => {
    return image.title.indexOf("mx.FoodDeliveryDownloads.image") !== -1;
  });
  const paxWhyDiDiImage = images.filter((image) => {
    return image.title === "mx.didi-repartidor";
  })[0];
  const paxWhyDiDiRegistro = images.filter((image) => {
    return image.title === "mx.DrvBenefits.image";
  })[0];
  const products = data.allContentfulProduct.nodes;
  const faqs = data.allContentfulFaq.nodes;
  const params = new URLSearchParams(location.search);
  const test = params.get("test");
  return (
    <Layout>
      <FoodDeliveryHero
        bgImage={foodDeliveryHeroBgImage}
        mobileBgImage={foodDeliveryHeroMobileBgImage}
      ></FoodDeliveryHero>
      {test === "true" && (
        <>
          <PaxWhyDiDiRepartidor image={paxWhyDiDiImage}></PaxWhyDiDiRepartidor>
          <RepartidorBanner></RepartidorBanner>
          <RepartidorRegistroBanner></RepartidorRegistroBanner>
          <PaxWhyDiDiRegistro image={paxWhyDiDiRegistro}></PaxWhyDiDiRegistro>
          <RequirementsRepartidor
            title="Requerimientos para registrarse en DiDi Repartidor según tu vehículo"
            data={products}
          ></RequirementsRepartidor>
          <DiDiRepartidoresFAQs
            faqs={faqs}
            title="Preguntas Frecuentes"
          ></DiDiRepartidoresFAQs>
          <KnowMoreBanner></KnowMoreBanner>
        </>
      )}
      {test !== "true" && (
        <>
          <FoodDeliveryColumns
            images={foodDeliveryColumnsImages}
          ></FoodDeliveryColumns>
          <FoodDeliveryStepsColumns></FoodDeliveryStepsColumns>
          <FoodDeliveryDownloads
            images={foodDeliveryDownloadsImages}
          ></FoodDeliveryDownloads>{" "}
        </>
      )}
    </Layout>
  );
};

export default FoodDelivery;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.FoodDeliveryHero.bgImage)|(mx.FoodDeliveryHeroMobile.bgImage)|(mx.FoodDeliveryColumns.image)|(mx.FoodDeliveryDownloads.image)|(mx.didi-repartidor)|(mx.DrvBenefits.image)/"
        }
      }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulFaq(
      filter: {
        country: { code: { eq: "mx" } }
        title: {
          in: [
            "¿Cuanto gana un repartidor de DiDi?"
            "¿Qué vehículos se permiten en DiDi Repartidor?"
            "¿Cómo ser repartidor de DiDi?"
            "¿Cómo contactar a Soporte DiDi?"
          ]
        }
      }
    ) {
      nodes {
        id
        title
        content {
          raw
          references {
            ... on ContentfulAsset {
              contentful_id
              title
              description
              gatsbyImageData(width: 800)
              __typename
            }
          }
        }
      }
    }
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "mx" } } }
        name: {
          in: [
            "Automóvil"
            "Motocicleta"
            "Bicicleta/bicicleta eléctrica"
            "Consideraciones para tus docs"
          ]
        }
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
        faq {
          title
          content {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                title
                description
                gatsbyImageData(width: 800)
                __typename
              }
            }
          }
        }
      }
    }
  }
`;
