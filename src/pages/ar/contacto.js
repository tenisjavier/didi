import React from "react";
import { graphql } from "gatsby";
import {
  faCar,
  faPhoneVolume,
  faUser,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";
import ContactHero from "../../components/sections/ContactHero";
import ContactBenefits from "../../components/sections/ContactBenefits";

const Contact = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const icons = [faCar, faPhoneVolume, faUser, faNewspaper];
  const homeHeroBgImage = images.filter((image) => {
    return image.title === "ar.ContactHero.bgImage";
  })[0];
  const ContactBenefitsImage = images.filter((image) => {
    return image.title === "ar.ContactBenefits.image";
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
        title: { in: ["ar.ContactHero.bgImage", "ar.ContactBenefits.image"] }
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
