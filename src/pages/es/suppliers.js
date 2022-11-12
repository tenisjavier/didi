import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../../components/CTASection";
import Layout from "../../components/Layout";
import TermsAndConditionsContent from "../../components/sections/TermsAndConditionsContent";

const Index = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const supplierHeroImage = images.filter((image) => {
    return image.title === "int.SuppliersHero.bgImage";
  })[0];

  const CTAProps = {
    hero: true,
    title: "Proveedores",
    textColor: "white",
    bgColor: "bg-gray-primary",
    bgImage: (
      <GatsbyImage
        image={supplierHeroImage.gatsbyImageData}
        alt={supplierHeroImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    image: (
      <StaticImage
        src="../../images/didi-logo.png"
        alt="DiDi"
        className="z-20 m-4 "
        width={250}
      ></StaticImage>
    ),
    alignItems: "center",
  };

  return (
    <Layout
      sb={false}
      title="Proveedores"
      desc="Con el fin de servir mejor a nuestro creciente negocio, buscamos constantemente proveedores aptos para ser nuestros socios."
    >
      <CTASection {...CTAProps}></CTASection>
      <TermsAndConditionsContent data={data}></TermsAndConditionsContent>
    </Layout>
  );
};

export default Index;

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
      filter: { title: { in: ["int.SuppliersHero.bgImage"] } }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    contentfulLegal(name: { eq: "Suppliers ES" }) {
      content {
        raw
      }
    }
  }
`;
