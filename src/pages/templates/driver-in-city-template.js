import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DrvCityHero from "../../components/sections/DrvCityHero";
import DrvHero from "../../components/sections/DrvHero";
import SilderSection from "../../components/sections/SliderSection";
import DrvCityList from "../../components/sections/DrvCityList";
import DrvCityOffice from "../../components/sections/DrvCityOffice";
import Requirements from "../../components/sections/Requirements";
import PlacesPrimaryColumn from "../../components/sections/PlacesPrimaryColumn";

const DrvCity = ({ data }) => {
  const { name, product } = data.contentfulCity;
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images[0];
  const requirements = data.allContentfulRequirement.nodes;
  const places = data.allContentfulPlace.nodes.slice(0, 3);
  const cities = data.allContentfulCity.nodes;
  return (
    <Layout>
      <DrvCityHero data={data.contentfulCity}></DrvCityHero>
      {drvHeroBgImage && <DrvHero bgImage={drvHeroBgImage}></DrvHero>}
      {product && (
        <SilderSection
          data={product}
          title={`Nuestros Servicios en ${name}`}
        ></SilderSection>
      )}
      <Requirements data={requirements}></Requirements>
      {places.length ? (
        <PlacesPrimaryColumn data={places}></PlacesPrimaryColumn>
      ) : null}
      {data.contentfulOffice ? (
        <DrvCityOffice data={data.contentfulOffice}></DrvCityOffice>
      ) : null}

      <DrvCityList data={cities}></DrvCityList>
    </Layout>
  );
};

export default DrvCity;

export const query = graphql`
  query (
    $id: String
    $language: String!
    $countryCode: String
    $componentImage: String
  ) {
    locales: allLocale(
      filter: { ns: { in: ["translation"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    contentfulCity(id: { eq: $id }) {
      name
      slug
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
    allContentfulAsset(filter: { title: { in: [$componentImage] } }) {
      nodes {
        id
        title
        description
        gatsbyImageData
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
    allContentfulPlace(
      filter: { city: { id: { eq: $id } }, primary: { eq: true } }
    ) {
      nodes {
        name
        address
        image {
          gatsbyImageData
        }
        city {
          name
          slug
        }
      }
    }
    allContentfulCity(
      filter: { country: { code: { eq: $countryCode } } }
      sort: { fields: name }
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
