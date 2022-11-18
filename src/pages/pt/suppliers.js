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
    title: "Fornecedores",
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
      title="Fornecedores"
      desc="Para melhor atender ao nosso negócio em crescimento, estamos constantemente à procura de fornecedores competentes para serem nossos parceiros."
    >
      <CTASection {...CTAProps}></CTASection>
      <TermsAndConditionsContent data={data}></TermsAndConditionsContent>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query {
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
    contentfulLegal(name: { eq: "Suppliers PT" }) {
      content {
        raw
      }
    }
  }
`;
