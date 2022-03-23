import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DrvCityHero from "../../../components/sections/DrvCityHero";
import SilderSection from "../../../components/sections/SliderSection";
import DrvCityList from "../../../components/sections/DrvCityList";
import DrvCityOffice from "../../../components/sections/DrvCityOffice";
import Requirements from "../../../components/sections/Requirements";

const DrvCity = ({ data }) => {
  const { name, product } = data.contentfulCity;
  const requirements = data.allContentfulRequirement.nodes;
  console.log("drvcity", data);
  return (
    <Layout>
      <DrvCityHero data={data.contentfulCity}></DrvCityHero>
      <SilderSection
        data={product}
        title={`Nuestros Servicios en ${name}`}
      ></SilderSection>
      {data.contentfulOffice ? (
        <DrvCityOffice data={data.contentfulOffice}></DrvCityOffice>
      ) : null}
      <Requirements data={requirements}></Requirements>
      <DrvCityList></DrvCityList>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    contentfulCity(id: { eq: $id }) {
      name
      product {
        name
        description
        image {
          gatsbyImageData
        }
        country {
          code
        }
      }
      geometry {
        lat
        lon
      }
    }
    contentfulOffice(city: { id: { eq: $id } }) {
      name
      address
      phone
      openHours
      photos {
        gatsbyImageData
      }
    }

    allContentfulRequirement(
      filter: { city: { elemMatch: { id: { eq: $id } } } }
    ) {
      nodes {
        name
        requirement {
          raw
        }
      }
    }
  }
`;

export default DrvCity;
