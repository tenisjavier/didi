import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";

const HomeTemplate = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiGuide {
        nodes {
          data {
            attributes {
              Content
              Title
            }
          }
        }
      }
    }
  `);
  const { Title, Content } = data.allStrapiGuide.nodes[0].data[0].attributes;
  console.log(Title);
  return (
    <Layout>
      <div>
        <ReactMarkdown children={Content}></ReactMarkdown>
      </div>
    </Layout>
  );
};

export default HomeTemplate;
