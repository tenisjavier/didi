import React from "react";
import { graphql } from "gatsby";
import {
  faHandshakeAngle,
  faPhoneVolume,
  faEnvelope,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";
import ContactHero from "../../components/sections/ContactHero";
import ContactBenefits from "../../components/sections/ContactBenefits";

const Contact = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const icons = [
    faHandshakeAngle,
    faPhoneVolume,
    faEnvelope,
    faExclamationCircle,
  ];
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "au.ContactHero.bgImage";
  })[0];
  const ContactBenefitsImage = images.filter((image) => {
    return image.title === "au.ContactBenefits.image";
  })[0];

  return (
    <Layout>
      <ContactHero bgImage={homeHeroBgImage}></ContactHero>
      <ContactBenefits
        image={ContactBenefitsImage}
        icons={icons}
      ></ContactBenefits>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: { in: ["au.ContactHero.bgImage", "au.ContactBenefits.image"] }
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
