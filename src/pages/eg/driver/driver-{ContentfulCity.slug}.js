import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DrvCityHero from "../../../components/sections/DrvCityHero";
import DrvHeroRTL from "../../../components/sections/DrvHeroRTL";
import SilderSection from "../../../components/sections/SliderSection";
import DrvCityList from "../../../components/sections/DrvCityList";
import DrvCityOffice from "../../../components/sections/DrvCityOffice";
import PlacesPrimaryColumn from "../../../components/sections/PlacesPrimaryColumn";

const DrvCity = ({ data }) => {
  const { name, product } = data.contentfulCity;
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images.filter((image) => {
    return image.title === "eg.DrvHero.bgImage";
  })[0];

  const places = data.allContentfulPlace.nodes.slice(0, 3);
  const cities = data.allContentfulCity.nodes;

  return (
    <Layout>
      <DrvCityHero data={data.contentfulCity}></DrvCityHero>
      <DrvHeroRTL bgImage={drvHeroBgImage}></DrvHeroRTL>
      <SilderSection
        data={product}
        title={`Our services in ${name}`}
      ></SilderSection>

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
  query ($id: String, $language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
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
      product {
        name
        description
        image {
          gatsbyImageData
        }
        country {
          name
          code
        }
      }
      geometry {
        lat
        lon
      }
    }
    allContentfulAsset(filter: { title: { in: ["eg.DrvHero.bgImage"] } }) {
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
        }
      }
    }
    allContentfulCity(
      filter: { country: { code: { eq: "eg" } } }
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
