import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import GananciasHero from "../../../components/sections/GananciasHero";
import WhyDiDiColumns from "../../../components/sections/WhyDiDiColumns";
import GananciasBanner from "../../../components/sections/GananciasBanner";
import GananciasConceptosFAQ from "../../../components/sections/GananciasConceptosFAQ";
import GananciasImpuestosFAQ from "../../../components/sections/GananciasImpuestosFAQ";
import GananciasObligaciones from "../../../components/sections/GananciasObligaciones";

const RequisitosFiscales = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const GananciasHeroBgImage = images.filter((image) => {
    return image.title === "cl.DrvHero.bgImage";
  })[0];

  return (
    <Layout>
      <GananciasHero bgImage={GananciasHeroBgImage}></GananciasHero>
      <WhyDiDiColumns></WhyDiDiColumns>
      <GananciasBanner image={GananciasHeroBgImage}></GananciasBanner>
      <GananciasConceptosFAQ></GananciasConceptosFAQ>
      <GananciasImpuestosFAQ></GananciasImpuestosFAQ>
      <GananciasObligaciones></GananciasObligaciones>
    </Layout>
  );
};

export default RequisitosFiscales;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "cl.DrvHero.bgImage"
            "cl.DrvWhyDiDi.image"
            "cl.DrvFeatures.image"
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
  }
`;
