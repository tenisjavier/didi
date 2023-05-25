import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import RequirementHero from "../../../components/sections/RequirementHero";
import DrvRequirementColumns from "../../../components/sections/DrvRequirementColumns";
import VehicleRequirementCTA from "../../../components/sections/VehicleRequirementCTA";
import FaqList from "../../../components/sections/FaqList";
import BankInfoCTA from "../../../components/sections/BankInfoCTA";
import FindInfoCTA from "../../../components/sections/FindInfoCTA";
import KnowMoreBanner from "../../../components/sections/KnowMoreBanner";

const RequisitosSocio = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const RequirementHeroBgImage = images.filter((image) => {
    return image.title === "mx.RequirementHero.bgImage";
  })[0];
  const DrvRequirementColumnsImage = images.filter((image) => {
    return image.title === "mx.DrvRequirementColumns.image";
  });
  const VehicleRequirementImage = images.filter((image) => {
    return image.title === "mx.VehicleRequirementCTA.image";
  })[0];
  const faqDrv = data.allContentfulProduct.nodes;

  return (
    <Layout index={true}>
      <RequirementHero bgImage={RequirementHeroBgImage}></RequirementHero>
      <DrvRequirementColumns
        images={DrvRequirementColumnsImage.reverse()}
      ></DrvRequirementColumns>
      <VehicleRequirementCTA
        image={VehicleRequirementImage}
      ></VehicleRequirementCTA>
      <BankInfoCTA></BankInfoCTA>
      <FindInfoCTA></FindInfoCTA>
      <FaqList faqs={faqDrv[0].faq}></FaqList>
      <KnowMoreBanner></KnowMoreBanner>
    </Layout>
  );
};

export default RequisitosSocio;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "mx.RequirementHero.bgImage"
            "mx.VehicleRequirementCTA.image"
            "mx.DrvRequirementColumns.image"
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
        name: { eq: "DiDi Express México" }
      }
    ) {
      nodes {
        name
        faq {
          title
          slug
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
