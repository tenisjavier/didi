import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import ProductHero from "../../../components/sections/ProductHero";
import SilderSection from "../../../components/sections/SliderSection";
import ProductCTAComponent from "../../../components/sections/ProductCTAComponent";
import HelpCenterFAQPax from "../../../components/sections/HelpCenterFAQPax";
import HomeColumns from "../../../components/sections/HomeColumns";

const Product = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const { name, description, components, componentImages } =
    data.contentfulProduct;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "au.PaxHero.bgImage";
  })[0];

  const homeColumnsImages = images.filter((image) => {
    return image.title.indexOf("au.HomeColumns.image") !== -1;
  });
  const products = data.allContentfulProduct.nodes;
  return (
    <Layout>
      <ProductHero
        title={name}
        desc={description}
        bgImage={paxHeroBgImage}
      ></ProductHero>
      {components.meta.map((comp, index) => {
        return (
          <ProductCTAComponent
            title={comp.title}
            desc={comp.desc}
            image={componentImages[index]}
          ></ProductCTAComponent>
        );
      })}
      <SilderSection data={products}></SilderSection>
      <HelpCenterFAQPax data={data.contentfulProduct}></HelpCenterFAQPax>
      <HomeColumns images={homeColumnsImages}></HomeColumns>
    </Layout>
  );
};

export default Product;

export const query = graphql`
  query ($language: String!, $id: String) {
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
          regex: "/(au.PaxHero.bgImage)|(au.PaxBenefits.image)|(au.HomeColumns.image)/"
        }
      }
      sort: { fields: title }
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
        country: { elemMatch: { code: { eq: "au" } } }
        category: { eq: "driver" }
      }
    ) {
      nodes {
        name
        description
        image {
          gatsbyImageData
        }
        country {
          code
        }
      }
    }
    contentfulProduct(id: { eq: $id }) {
      name
      description
      faq {
        title
        content {
          raw
        }
      }
      image {
        gatsbyImageData
      }
      country {
        code
      }
      components {
        meta {
          title
          desc
        }
      }
      componentImages {
        gatsbyImageData
        description
      }
    }
  }
`;
