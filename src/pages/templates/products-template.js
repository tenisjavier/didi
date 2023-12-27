import React from "react";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router";
import Layout from "../../components/Layout";
import ProductHero from "../../components/sections/ProductHero";
import SilderSection from "../../components/sections/SliderSection";
import ProductCTAComponent from "../../components/sections/ProductCTAComponent";
import HelpCenterFAQPax from "../../components/sections/HelpCenterFAQPax";
import HomeColumns from "../../components/sections/HomeColumns";
import HomeAltColumns from "../../components/sections/HomeAltColumns";

const ProductsTemplate = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const { name, description, components, componentImages } =
    data.contentfulProduct;
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "au.PaxHero.bgImage";
  })[0];

  const homeColumnsImages = images.filter((image) => {
    return image.title.indexOf("au.HomeColumns.image") !== -1;
  });

  const { pathname } = useLocation();
  const products = data.allContentfulProduct.nodes;

  let homeColumns = <HomeColumns images={homeColumnsImages}></HomeColumns>;

  return (
    <Layout>
      <ProductHero
        title={name}
        desc={description}
        bgImage={paxHeroBgImage}
      ></ProductHero>
      {components &&
        components.meta.map((comp, index) => {
          return (
            <ProductCTAComponent
              title={comp.title}
              desc={comp.desc}
              image={componentImages[index]}
              key={index}
            ></ProductCTAComponent>
          );
        })}
      <SilderSection data={products}></SilderSection>
      {data.contentfulProduct.faq && (
        <HelpCenterFAQPax data={data.contentfulProduct}></HelpCenterFAQPax>
      )}
      {homeColumns}
    </Layout>
  );
};

export default ProductsTemplate;

export const query = graphql`
  query ($id: String, $countryCode: String) {
    allContentfulAsset(
      filter: {
        title: {
          regex: "/(au.PaxHero.bgImage)|(au.PaxBenefits.image)|(au.HomeColumns.image)/"
        }
      }
      sort: { title: ASC }
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
        country: { elemMatch: { code: { eq: $countryCode } } }
        category: { eq: "driver" }
      }
    ) {
      nodes {
        contentful_id
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
      contentful_id
      name
      description
      faq {
        contentful_id
        title
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
        title
      }
    }
  }
`;
