import React from "react";
import { graphql } from "gatsby";
import {
  faCircleDollarToSlot,
  faShieldHeart,
  faComments,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout";
import DrvHeroRTL from "../../components/sections/DrvHeroRTL";
import DrvBenefits from "../../components/sections/DrvBenefits";
import DrvCityList from "../../components/sections/DrvCityList";

const Driver = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const icons = [
    faCircleDollarToSlot,
    faShieldHeart,
    faChartColumn,
    faComments,
  ];
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "eg.DrvHero.bgImage";
  })[0];
  const drvBenefitsImage = images.filter((image) => {
    return image.title === "eg.DrvBenefits.image";
  })[0];
  const cities = data.allContentfulCity.nodes;
  return (
    <Layout>
      <DrvHeroRTL bgImage={drvHeroBgImage}></DrvHeroRTL>
      <DrvBenefits image={drvBenefitsImage} icons={icons}></DrvBenefits>
      <DrvCityList data={cities}></DrvCityList>
    </Layout>
  );
};

export default Driver;

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: { regex: "/(eg.DrvHero.bgImage)|(eg.DrvBenefits.image)/" }
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
        country: { elemMatch: { code: { eq: "eg" } } }
        category: { eq: "driver" }
      }
    ) {
      nodes {
        contentful_id
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
    allContentfulCity(
      filter: { country: { code: { eq: "eg" } } }
      sort: { name: ASC }
    ) {
      nodes {
        name
        slug
        image {
          gatsbyImageData(width: 400)
          description
        }
      }
    }
  }
`;
