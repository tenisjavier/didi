import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import DrvCityHero from "../../components/sections/DrvCityHero";
import DrvHero from "../../components/sections/DrvHero";
import SilderSectionCity from "../../components/sections/SliderSectionCity";
import DrvCityList from "../../components/sections/DrvCityList";
import DrvCityOffice from "../../components/sections/DrvCityOffice";
import Requirements from "../../components/sections/Requirements";
import PlacesPrimaryColumn from "../../components/sections/PlacesPrimaryColumn";

const DrvCity = ({ data }) => {
  const { name, product } = data.contentfulCity;
  const country = data.contentfulCity.country.code;
  const images = data.allContentfulAsset.nodes;
  const drvHeroBgImage = images[0];
  const requirements = data.allContentfulRequirement.nodes;
  const places = data.allContentfulPlace.nodes.slice(0, 3);
  const cities = data.allContentfulCity.nodes;
  let RTL = false;
  if (country === "eg") {
    RTL = true;
  }
  return (
    <Layout>
      <DrvCityHero isRTL={RTL} data={data.contentfulCity}></DrvCityHero>
      {drvHeroBgImage && (
        <DrvHero isRTL={RTL} bgImage={drvHeroBgImage}></DrvHero>
      )}
      {product && (
        <SilderSectionCity data={product} city={name}></SilderSectionCity>
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
  query ($id: String, $countryCode: String, $componentImage: String) {
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
      country {
        code
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
      filter: {
        product: { elemMatch: { category: { eq: "driver" } } }
        country: { code: { eq: $countryCode } }
      }
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
