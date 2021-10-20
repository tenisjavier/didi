import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
  query getPage($title: String!) {
    sitePage(context: { title: { eq: $title } }) {
      featuredImageUrl {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, width: 400)
        }
      }
      context {
        title
      }
    }
  }
`;

const WpTemplate = ({ data }) => {
  console.log(data);
  const { title } = data.sitePage.context;
  const image = getImage(data.sitePage.featuredImageUrl);
  return (
    <Layout>
      <h1>{title}</h1>
      <GatsbyImage image={image} alt={title} className="ej" />
    </Layout>
  );
};

export default WpTemplate;
