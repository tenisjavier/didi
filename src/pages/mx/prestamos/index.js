import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DiDiPrestamosHero from "../../../components/sections/DiDiPrestamosHero";
import DiDiPrestamosColumns from "../../../components/sections/DiDiPrestamosColumns";
import DiDiPrestamosWhyDiDi from "../../../components/sections/DiDiPrestamosWhyDiDi";
import DiDiPrestamosFeatures from "../../../components/sections/DiDiPrestamosFeatures";

const DiDiPrestamos = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "mx.PrestamosHero.image";
  })[0];
  const prestamoWhyDiDiImage = images.filter((image) => {
    return image.title === "mx.PrestamosWhyDiDi.image";
  })[0];
  const prestamosFeaturesImage = images.filter((image) => {
    return image.title === "mx.PrestamosFeatures.image";
  })[0];

  return (
    <Layout index={false}>
      <DiDiPrestamosHero image={homeHeroBgImage}></DiDiPrestamosHero>
      <DiDiPrestamosColumns></DiDiPrestamosColumns>
      <DiDiPrestamosWhyDiDi image={prestamoWhyDiDiImage}></DiDiPrestamosWhyDiDi>
      <DiDiPrestamosFeatures
        image={prestamosFeaturesImage}
      ></DiDiPrestamosFeatures>
    </Layout>
  );
};

export default DiDiPrestamos;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(mx.PrestamosHero.image)|(mx.PrestamosFeatures.image)|(mx.PrestamosWhyDiDi.image)/"
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
