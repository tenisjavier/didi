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
  //? if statement to remove the second last image that is taxi since it is not on DO yet
  if (DrvRequirementColumnsImage.length >= 2) {
    DrvRequirementColumnsImage.splice(1, 1);
    DrvRequirementColumnsImage.splice(-2, 1);
  }
  const VehicleRequirementImage = images.filter((image) => {
    return image.title === "mx.VehicleRequirementCTA.image";
  })[0];
  const BankInfoCTAImage = images.filter((image) => {
    return image.title === "mx.DiDiPayPhoneWhy.image";
  })[0];
  const faqDrv = data.allContentfulProduct.nodes;

  return (
    <Layout index={false}>
      <RequirementHero bgImage={RequirementHeroBgImage}></RequirementHero>
      <DrvRequirementColumns
        images={DrvRequirementColumnsImage}
      ></DrvRequirementColumns>
      <VehicleRequirementCTA
        image={VehicleRequirementImage}
      ></VehicleRequirementCTA>
      <BankInfoCTA image={BankInfoCTAImage}></BankInfoCTA>
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
            "mx.DiDiPayPhoneWhy.image"
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
        country: { elemMatch: { code: { eq: "do" } } }
        name: { eq: "DiDi Express R. Dominicana" }
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
