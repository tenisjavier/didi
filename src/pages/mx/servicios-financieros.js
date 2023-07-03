import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FinancialServicesHero from "../../components/sections/FinancialServicesHero";
import FinancialServicesColumns from "../../components/sections/FinancialServicesColumns";

const SobreDiDi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.DiDiPayBlogHero.bgImage";
  })[0];
  const DiDiPayWhyDiDi = images.filter((image) => {
    return image.title === "mx.DiDiPayHomeHero.image";
  })[0];
  const PrestamosHeroImage = images.filter((image) => {
    return image.title === "mx.PrestamosHero.image";
  })[0];

  const columnsImages = [DiDiPayWhyDiDi, PrestamosHeroImage];
  return (
    <Layout>
      <FinancialServicesHero bgImage={homeHeroBgImage}></FinancialServicesHero>
      <FinancialServicesColumns
        images={columnsImages}
      ></FinancialServicesColumns>
    </Layout>
  );
};

export default SobreDiDi;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "mx.DiDiPayBlogHero.bgImage"
            "mx.DiDiPayHomeHero.image"
            "mx.PrestamosHero.image"
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
