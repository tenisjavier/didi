import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import MujeresDiDiHero from "../../../components/sections/MujeresDiDiHero";
import MujeresEnDiDiColumns from "../../../components/sections/MujeresEnDiDiColumns";
import DiDiMujerFuncionCTA from "../../../components/sections/DiDiMujerFuncionCTA";
import DiDiMujerProgramaCTA from "../../../components/sections/DiDiMujerProgramaCTA";
import DiDiMujerPercentageColumns from "../../../components/sections/DiDiMujerPercentageColumns";
import DiDiMujerVideoSection from "../../../components/sections/DiDiMujerVideoSection";
import AlianzaMujeresCTA from "../../../components/sections/AlianzaMujeresCTA";
import ApoyoMujeresCTA from "../../../components/sections/ApoyoMujeresCTA";

const Ganancias = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const MujeresDiDiHeroBgImage = images.filter((image) => {
    return image.title === "mx.MujeresDiDiHero.bgImage";
  })[0];

  const MujeresDiDiCTAImage = images.filter((image) => {
    return image.title === "mx.DiDiMujerCTA.image";
  })[0];

  const MujeresEnDiDiColumnsImage = images.filter((image) => {
    return image.title === "mx.MujeresPercentage.image";
  });
  
  const DiDiMujerPercentageColumnsImage = images.filter((image) => {
    return image.title === "mx.MujeresPercentageProgram.image";
  });

  const AlianzaMujeresCTAImage = images.filter((image) => {
    return image.title === "mx.AlianzaMujeres.image";
  })[0];

  const DiDiMujerProgramaCTAImage = images.filter((image) => {
    return image.title === "mx.DiDiMujerPrograma.image";
  })[0];

  const ApoyoMujeresCTAImage = images.filter((image) => {
    return image.title === "mx.WomenDiDiCTA.image";
  })[0];
            
  return (
    <Layout>
      <MujeresDiDiHero bgImage={MujeresDiDiHeroBgImage}></MujeresDiDiHero>
      <MujeresEnDiDiColumns images={MujeresEnDiDiColumnsImage.reverse()}></MujeresEnDiDiColumns>
      <DiDiMujerFuncionCTA image={MujeresDiDiCTAImage}></DiDiMujerFuncionCTA>
      <DiDiMujerProgramaCTA image={DiDiMujerProgramaCTAImage}></DiDiMujerProgramaCTA>
      <DiDiMujerPercentageColumns images={DiDiMujerPercentageColumnsImage.reverse()}></DiDiMujerPercentageColumns>
      <DiDiMujerVideoSection></DiDiMujerVideoSection>
      <AlianzaMujeresCTA image={AlianzaMujeresCTAImage}></AlianzaMujeresCTA>
      <ApoyoMujeresCTA image={ApoyoMujeresCTAImage}></ApoyoMujeresCTA>
    </Layout>
  );
};

export default Ganancias;

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
            "mx.MujeresDiDiHero.bgImage"
            "mx.DiDiMujerCTA.image"
            "mx.MujeresPercentage.image"
            "mx.MujeresPercentageProgram.image"
            "mx.AlianzaMujeres.image"
            "mx.DiDiMujerPrograma.image"
            "mx.WomenDiDiCTA.image"
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
