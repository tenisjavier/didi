import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
  query getPage($id: String!) {
    sitePage(id: { eq: $id }) {
      featuredImageUrl {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, width: 400)
        }
      }
    }
  }
`;

const WpTemplate = ({ data, pageContext }) => {
  const title = pageContext.title;
  const content = pageContext.content;

  const image = getImage(data.sitePage.featuredImageUrl);
  return (
    <Layout>
      <h1>{title}</h1>
      <GatsbyImage image={image} alt="jeivi" className="ej" />
      <p>{content}</p>
    </Layout>
  );
};

export default WpTemplate;
