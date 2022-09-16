import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import FeatureHero from "../../../components/sections/FeatureHero";
import FeatureCTAComponent from "../../../components/sections/FeatureCTAComponent";
import HelpCenterFAQ from "../../../components/sections/HelpCenterFAQ";
import HomeColumns from "../../../components/sections/HomeColumns";

const Feature = ({ data }) => {
  const { name, description, components, componentImages, category } =
    data.contentfulFeature;

  const btnType = category[0] === "driver" ? "drv" : "pax";
  return (
    <Layout>
      <FeatureHero
        title={name}
        desc={description}
        btnType={btnType}
      ></FeatureHero>
      {components &&
        components.meta.map((comp, index) => {
          return (
            <FeatureCTAComponent
              title={comp.title}
              desc={comp.desc}
              image={componentImages[index]}
              btnType={btnType}
              key={index}
            ></FeatureCTAComponent>
          );
        })}
      {data.contentfulFeature.faq && (
        <HelpCenterFAQ data={data.contentfulFeature}></HelpCenterFAQ>
      )}
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default Feature;

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
    contentfulFeature(id: { eq: $id }) {
      name
      description
      category
      faq {
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
