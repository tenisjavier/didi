import React from "react";
import { graphql } from "gatsby";
import {
  faCircleDollarToSlot,
  faClock,
  faUserShield,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";
import PaxHero from "../../components/sections/PaxHero";
import SilderSection from "../../components/sections/SliderSection";
import PaxBenefits from "../../components/sections/PaxBenefits";
import PaxBanner from "../../components/sections/PaxBanner";

const Pasajero = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const icons = [faCircleDollarToSlot, faClock, faUserShield, faThumbsUp];
  const paxHeroBgImage = images.filter((image) => {
    return image.title === "nz.PaxHero.bgImage";
  })[0];
  const paxBenefitsImage = images.filter((image) => {
    return image.title === "nz.PaxBenefits.image";
  })[0];

  const products = data.allContentfulProduct.nodes;
  return (
    <Layout>
      <PaxHero bgImage={paxHeroBgImage}></PaxHero>
      <PaxBenefits image={paxBenefitsImage} icons={icons}></PaxBenefits>
      <PaxBanner></PaxBanner>
      <SilderSection data={products}></SilderSection>
    </Layout>
  );
};

export default Pasajero;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: { regex: "/(nz.PaxHero.bgImage)|(nz.PaxBenefits.image)/" }
      }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        description
        gatsbyImageData
      }
    }
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "nz" } } }
        category: { eq: "driver" }
      }
    ) {
      nodes {
        name
        description
        phone
        requirement {
          raw
        }
        image {
          gatsbyImageData
        }
        country {
          code
        }
      }
    }
  }
`;
