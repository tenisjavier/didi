import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import SafetyWomanHero from "../../components/sections/SafetyWomanHero";
import SafetyWomanBanner from "../../components/sections/SafetyWomanBanner";
import SafetyGridWoman from "../../components/sections/SafetyGridWoman";
import AboutSafetyWomanVideo from "../../components/sections/AboutSafetyWomanVideo";
import SafetyWomanFAQ from "../../components/sections/SafetyWomanFAQ";
import SafetyGridWomanSteps from "../../components/sections/SafetyGridWomanSteps";

const SeguridadParaMujeres = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const faq = data.allContentfulFaq.nodes;
  const safetyWomanBgImage = images.filter((image) => {
    return image.title === "co.SafetyWomanHero.bgImage";
  })[0];
  const safetyWomanImage = images.filter((image) => {
    return image.title === "co.SafetyWomanHero.image";
  })[0];
  const safetyWomanGridImages = images.filter((image) => {
    return image.title.indexOf("co.SafetyWoman.image") !== -1;
  });

  return (
    <Layout>
      <SafetyWomanHero
        bgImage={safetyWomanBgImage}
        image={safetyWomanImage}
      ></SafetyWomanHero>
      <SafetyWomanBanner></SafetyWomanBanner>
      <SafetyGridWoman images={safetyWomanGridImages}></SafetyGridWoman>
      <AboutSafetyWomanVideo></AboutSafetyWomanVideo>
      <SafetyGridWomanSteps></SafetyGridWomanSteps>
      <SafetyWomanFAQ faq={faq}></SafetyWomanFAQ>
    </Layout>
  );
};

export default SeguridadParaMujeres;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { regex: "/(co.SafetyWoman)/" } }
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
        title: {
          regex: "/(¿Qué pasa con los agresores?)|(¿DiDi realiza validación de antecedentes de forma periódica?)|(¿DiDi colabora con las autoridades para solucionar los incidentes de seguridad?)|(¿DiDi me puede compartir la información de los socios y/o usuarios que están involucrados en un caso de seguridad?)|(¿Qué debo hacer si soy víctima de una situación de violencia basada en género al usar la aplicación?)/"
        }
        country: { code: { eq: "co" } }
      }
    ) {
      nodes {
        id
        title
        content {
          raw
        }
      }
    }
  }
`;
