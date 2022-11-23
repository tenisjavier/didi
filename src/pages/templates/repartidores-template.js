import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import GuideHero from "../../components/sections/GuideHero";
import ColumnSectionImageText from "../../components/sections/ColumnSectionImageText";

const RepartidoresTemplate = ({ data }) => {
  return (
    <Layout>
      <GuideHero data={data.contentfulGuide}></GuideHero>
      <section className="container mx-auto mb-32 text-gray-primary md:px-28 mt-16">
        {data.contentfulGuide.content.references.map((line) => (
          <ColumnSectionImageText line={line.content.references} />
        ))}
      </section>
    </Layout>
  );
};

export default RepartidoresTemplate;

export const query = graphql`
  query($id: String){
    contentfulGuide(id: {eq: $id }, category: { eq: "delivery" }){
      title
      featuredImage {
        gatsbyImageData
      }
      content {
        raw
        references {
          ... on ContentfulLine {
            id
            content {
              references {
                ... on ContentfulColumnContent {
                  id
                  title
                  image {
                    gatsbyImageData
                  }
                  content {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
