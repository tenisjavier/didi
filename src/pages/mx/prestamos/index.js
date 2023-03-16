import React from "react";
import { graphql } from "gatsby";
import {
  faPercent,
  faClock,
  faThumbsUp,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../components/Layout";
import DiDiPrestamosHero from "../../../components/sections/DiDiPrestamosHero";
import DiDiPrestamosBenefits from "../../../components/sections/DiDiPrestamosBenefits";
import DiDiPrestamosWhyDiDi from "../../../components/sections/DiDiPrestamosWhyDiDi";
import DiDiPrestamosFeatures from "../../../components/sections/DiDiPrestamosFeatures";
import DiDiPrestamosDrvGrid from "../../../components/sections/DiDiPrestamosDrvGrid";
import DiDiPrestamosReviews from "../../../components/sections/DiDiPrestamosReviews";
import DiDiPrestamosPress from "../../../components/sections/DiDiPrestamosPress";
import DiDiPayFAQs from "../../../components/sections/DiDiPayFAQs";

const DiDiPrestamos = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const icons = [faPercent, faClock, faThumbsUp, faWallet];
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.PrestamosHero.image";
  })[0];
  const drvBenefitsImage = images.filter((image) => {
    return image.title === "mx.PrestamosBenefits.image";
  })[0];
  const prestamoWhyDiDiImage = images.filter((image) => {
    return image.title === "mx.PrestamosWhyDiDi.image";
  })[0];
  const prestamosDrvImages = images.filter((image) => {
    return image.title.indexOf("mx.PrestamosDrvGrid.image") !== -1;
  });
  const prestamosFeaturesImage = images.filter((image) => {
    return image.title === "mx.PrestamosFeatures.image";
  })[0];
  const prestamosReviewsBgImage = images.filter((image) => {
    return image.title === "mx.DiDiPrestamosReviews.bgImage";
  })[0];
  const faqsSobreNosotros = data.allContentfulProduct.nodes[0].faq.filter(
    (item) =>
      item.title === "¿Qué es DiDi Préstamos?" ||
      item.title === "¿DiDi Préstamos es seguro?" ||
      item.title === "¿Dónde puedo encontrar DiDi Préstamos?" ||
      item.title ===
        "¿Cuáles son los requisitos para solicitar un préstamo de DiDi Préstamos?" ||
      item.title === "¿Cómo retirar dinero si la solicitud es aprobada?"
  );
  return (
    <Layout index={false} sb={false}>
      <DiDiPrestamosHero image={homeHeroBgImage}></DiDiPrestamosHero>
      <DiDiPrestamosBenefits
        image={drvBenefitsImage}
        icons={icons}
      ></DiDiPrestamosBenefits>
      <DiDiPrestamosWhyDiDi image={prestamoWhyDiDiImage}></DiDiPrestamosWhyDiDi>
      <DiDiPrestamosFeatures
        image={prestamosFeaturesImage}
      ></DiDiPrestamosFeatures>
      <DiDiPrestamosDrvGrid images={prestamosDrvImages}></DiDiPrestamosDrvGrid>
      <DiDiPrestamosReviews
        bgImage={prestamosReviewsBgImage}
      ></DiDiPrestamosReviews>
      <DiDiPrestamosPress></DiDiPrestamosPress>
      <DiDiPayFAQs
        data={faqsSobreNosotros}
        title="Preguntas Frecuentes"
      ></DiDiPayFAQs>
    </Layout>
  );
};

export default DiDiPrestamos;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.PrestamosHero.image)|(mx.PrestamosBenefits.image)|(mx.PrestamosFeatures.image)|(mx.PrestamosDrvGrid.image)|(mx.DiDiPrestamosReviews.bgImage)|(mx.PrestamosWhyDiDi.image)/"
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
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "mx" } } }
        name: { eq: "DiDi Préstamos México" }
      }
    ) {
      nodes {
        name
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
