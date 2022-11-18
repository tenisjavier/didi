import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import TaxRequiredHero from "../../../components/sections/TaxRequiredHero";
import TaxRequiredColumns from "../../../components/sections/TaxRequiredColumns";
import DigitalStampsFAQ from "../../../components/sections/DigitalStampsFAQ";
import TaxRequiredVideoSection from "../../../components/sections/TaxRequiredVideoSection";
import TaxDocumentationCTA from "../../../components/sections/TaxDocumentationCTA";
import TaxDocumentsFAQ from "../../../components/sections/TaxDocumentsFAQ";
import TaxAdviceColumns from "../../../components/sections/TaxAdviceColumns";
import TaxDeclarationCTA from "../../../components/sections/TaxDeclarationCTA";
import KnowMoreBanner from "../../../components/sections/KnowMoreBanner";

const RequisitosFiscales = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const TaxRequiredHeroBgImage = images.filter((image) => {
    return image.title === "mx.TaxRequiredHero.bgImage";
  })[0];
  const TaxRequiredColumnsImage = images.filter((image) => {
    return image.title === "mx.TaxRequiredColumns.image";
  });
  const TaxAdviceColumnsImage = images.filter((image) => {
    return image.title === "mx.TaxAdviceColumns.image";
  });
  const DigitalStampImage = images.filter((image) => {
    return image.title === "mx.DigitalStampsFAQ.image";
  })[0];

  return (
    <Layout>
      <TaxRequiredHero bgImage={TaxRequiredHeroBgImage}></TaxRequiredHero>
      <TaxRequiredColumns
        images={TaxRequiredColumnsImage.reverse()}
      ></TaxRequiredColumns>
      <DigitalStampsFAQ image={DigitalStampImage}></DigitalStampsFAQ>
      <TaxDocumentationCTA></TaxDocumentationCTA>
      <TaxRequiredVideoSection></TaxRequiredVideoSection>
      <TaxDocumentsFAQ></TaxDocumentsFAQ>
      <TaxAdviceColumns
        images={TaxAdviceColumnsImage.reverse()}
      ></TaxAdviceColumns>
      <TaxDeclarationCTA></TaxDeclarationCTA>
      <KnowMoreBanner></KnowMoreBanner>
    </Layout>
  );
};

export default RequisitosFiscales;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "mx.TaxRequiredHero.bgImage"
            "mx.TaxRequiredColumns.image"
            "mx.TaxAdviceColumns.image"
            "mx.DigitalStampsFAQ.image"
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
