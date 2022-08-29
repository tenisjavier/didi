import React from "react";
import { graphql } from "gatsby";
import {
  faFilePen,
  faFileExport,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";
import ContactAuthorityHero from "../../components/sections/ContactAuthorityHero";
import ContactAuthorityBenefits from "../../components/sections/ContactAuthorityBenefits";

const Contact = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const icons = [faFilePen, faFileExport, faFileCircleCheck];
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "co.ContactAuthorityHero.bgImage";
  })[0];
  const ContactBenefitsImage = images.filter((image) => {
    return image.title === "co.ContactAuthorityBenefits.image";
  })[0];

  return (
    <Layout>
      <ContactAuthorityHero bgImage={homeHeroBgImage}></ContactAuthorityHero>
      <ContactAuthorityBenefits
        image={ContactBenefitsImage}
        icons={icons}
      ></ContactAuthorityBenefits>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query ($language: String!) {
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
          in: [
            "co.ContactAuthorityHero.bgImage"
            "co.ContactAuthorityBenefits.image"
          ]
        }
      }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
  }
`;
