import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import GananciasHero from "../../../components/sections/GananciasHero";
import WhyDiDiColumns from "../../../components/sections/WhyDiDiColumns";
import GananciasBanner from "../../../components/sections/GananciasBanner";
import GananciasConceptosFAQ from "../../../components/sections/GananciasConceptosFAQ";
import GananciasImpuestosFAQ from "../../../components/sections/GananciasImpuestosFAQ";
import GananciasObligaciones from "../../../components/sections/GananciasObligaciones";

const Ganancias = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const GananciasHeroBgImage = images.filter((image) => {
    return image.title === "mx.GananciasHero.bgImage";
  })[0];

  const GananciasBannerImage = images.filter((image) => {
    return image.title === "mx.GananciasCTA.image";
  })[0];

  const WhyDiDiColumnsImage = images.filter((image) => {
    return image.title === "mx.WhyDiDiColumns.image";
  });

  return (
    <Layout>
      <GananciasHero bgImage={GananciasHeroBgImage}></GananciasHero>
      <WhyDiDiColumns images={WhyDiDiColumnsImage.reverse()}></WhyDiDiColumns>
      <GananciasBanner image={GananciasBannerImage}></GananciasBanner>
      <GananciasConceptosFAQ></GananciasConceptosFAQ>
      <GananciasImpuestosFAQ></GananciasImpuestosFAQ>
      <GananciasObligaciones></GananciasObligaciones>
    </Layout>
  );
};

export default Ganancias;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "mx.GananciasHero.bgImage"
            "mx.GananciasCTA.image"
            "mx.WhyDiDiColumns.image"
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
        contentful_id
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
