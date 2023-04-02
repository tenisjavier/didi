import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import FeatureHero from "../../components/sections/FeatureHero";
import FeatureCTAComponent from "../../components/sections/FeatureCTAComponent";
import HelpCenterFAQ from "../../components/sections/HelpCenterFAQ";
import SafetyFeatureContent from "../../components/sections/SafetyFeatureContent";

const Feature = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const { name, description, components, componentImages, category, content } =
    data.contentfulFeature;

  const btnType = category === "driver" ? "drv" : "pax";
  const features = data.contentfulFeature;
  const isClosed =
    features.name === "Fatigue Prevention Feature" ? false : true;

  return (
    <Layout title={name} desc={description}>
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
              bullets={comp.bullets}
              image={componentImages[index]}
              btnType={btnType}
              key={index}
            ></FeatureCTAComponent>
          );
        })}
      {content && <SafetyFeatureContent data={data}></SafetyFeatureContent>}

      {data.contentfulFeature.faq && (
        <HelpCenterFAQ
          isClosed={isClosed}
          data={data.contentfulFeature}
        ></HelpCenterFAQ>
      )}
    </Layout>
  );
};

export default Feature;

export const query = graphql`
  query ($id: String) {
    allContentfulAsset(
      filter: { title: { regex: "/(mx.HomeColumns.image)/" } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
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
          bullets
        }
      }
      componentImages {
        gatsbyImageData
        description
        title
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 1000)
            __typename
          }
        }
      }
    }
  }
`;
