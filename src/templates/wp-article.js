import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const query = graphql`
  query ($id: String!) {
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

  function createMarkup() {
    return { __html: content };
  }

  return (
    <Layout>
      <h1>{title}</h1>
      <h2>article template</h2>
      <GatsbyImage image={image} alt="jeivi" className="ej" />
      <div dangerouslySetInnerHTML={createMarkup()} />
    </Layout>
  );
};

export default WpTemplate;
