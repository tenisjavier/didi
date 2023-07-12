import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../../components/Layout";
import EducationalGuideFoodHero from "../../../../components/sections/EducationalGuideFoodHero";
import FoodEducationalGuidesList from "../../../../components/sections/FoodEducationalGuidesList";

const GuiasEducacionales = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const helpCenterBgImage = images.filter((image) => {
    return image.title === "mx.FaqFoodHero.bgImage";
  })[0];
  const modifyGuidesImage = images.filter((image) => {
    return image.title === "mx.GuideListItem.image";
  });
  const operationsGuidesImage = images.filter((image) => {
    return image.title === "mx.OperationsGuideListItem.image";
  });

  const educationalGuides = data.allContentfulFaq.edges;
  const onlyModifyGuides = educationalGuides.filter((guide) => {
    return (
      guide.node.title !== "Cómo Administrar al Personal" &&
      guide.node.title !== "Cómo funcionan los reembolsos" &&
      guide.node.title !==
        "Cómo Calificar Tu Experiencia con un Socio Repartidor"
    );
  });

  const onlyOperationsGuides = educationalGuides.filter((guide) => {
    return (
      guide.node.title === "Cómo Administrar al Personal" ||
      guide.node.title === "Cómo funcionan los reembolsos" ||
      guide.node.title ===
        "Cómo Calificar Tu Experiencia con un Socio Repartidor"
    );
  });

  return (
    <Layout>
      <EducationalGuideFoodHero
        bgImage={helpCenterBgImage}
      ></EducationalGuideFoodHero>
      <FoodEducationalGuidesList
        images={modifyGuidesImage.reverse()}
        title="Modificaciones al menú"
        faqs={onlyModifyGuides.reverse()}
      ></FoodEducationalGuidesList>
      <FoodEducationalGuidesList
        images={operationsGuidesImage.reverse()}
        title="Operación de la tienda"
        faqs={onlyOperationsGuides.reverse()}
      ></FoodEducationalGuidesList>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "mx.FaqFoodHero.bgImage"
            "mx.OperationsGuideListItem.image"
            "mx.GuideListItem.image"
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
    allContentfulFaq(
      filter: {
        isEducationalGuide: { eq: true }
        country: { code: { eq: "co" } }
      }
    ) {
      edges {
        node {
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

export default GuiasEducacionales;
