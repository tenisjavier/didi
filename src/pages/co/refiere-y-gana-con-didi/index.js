import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DiDiExpressPlus from "../../../components/sections/expressPlus/DiDiExpressPlusHero";
import DiDiExpressPlusPartner from "../../../components/sections/expressPlus/DiDiExpressPlusPartner";
import DiDiExpressPlusScore from "../../../components/sections/expressPlus/DiDiExpressPlusScore";
import DiDiExpressPlusAwardsColumn from "../../../components/sections/expressPlus/DiDiExpressPlusAwardsColumn";
import DiDiExtraPlusChangePoints from "../../../components/sections/expressPlus/DiDiExtraPlusChangePoints";

const ganaConDidi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const didiExpressPlusPartnerImage = images.filter((image) => {
    return image.title === "co.expressPlusPartner.image";
  })[0];

  const didiExpressPlusScoreImage = images.filter((image) => {
    return image.title === "co.expressPlusScore.image";
  })[0];

  const didiExpressPlusHeroBgImage = images.filter((image) => {
    return image.title === "co.expressplus.bgImage";
  })[0];
  const didiExpressPlusHeroBgImageMobile = images.filter((image) => {
    return image.title === "co.expressplus.bgImageMobile";
  })[0];

  const awardsImages = images.filter((image) => {
    return image.title.includes("co.DiDiExtraPlus");
  });

  return (
    <Layout
      title={"Refiere y Gana"}
      desc={"Acumula puntos y canjéalos por premios"}
    >
      <DiDiExpressPlus
        bgImage={didiExpressPlusHeroBgImage}
        bgMobile={didiExpressPlusHeroBgImageMobile}
      ></DiDiExpressPlus>
      <DiDiExpressPlusPartner
        image={didiExpressPlusPartnerImage}
      ></DiDiExpressPlusPartner>
      <DiDiExpressPlusScore
        image={didiExpressPlusScoreImage}
      ></DiDiExpressPlusScore>
      <DiDiExpressPlusAwardsColumn
        images={awardsImages}
      ></DiDiExpressPlusAwardsColumn>
      <DiDiExtraPlusChangePoints
        image={didiExpressPlusScoreImage}
      ></DiDiExtraPlusChangePoints>
    </Layout>
  );
};

export default ganaConDidi;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "co.expressPlusPartner.image"
            "co.expressPlusScore.image"
            "co.expressplus.bgImage"
            "co.expressplus.bgImageMobile"
            "co.DiDiExtraPlus.cine.image"
            "co.DiDiExtraPlus.crepes.image"
            "co.DiDiExtraPlus.paramount.image"
            "co.DiDiExtraPlus.netflix.image"
            "co.DiDiExtraPlus.celular.image"
            "co.DiDiExtraPlus.audifonos.image"
            "co.DiDiExtraPlus.tv.image"
            "co.DiDiExtraPlus.bebidas.image"
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
