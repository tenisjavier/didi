import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import DrvCityHero from "../../../components/ar/DrvCityHero";
import SilderSection from "../../../components/ar/SliderSection";
import DrvCityList from "../../../components/ar/DrvCityList";
import DrvCityOffice from "../../../components/ar/DrvCityOffice";
import Requirements from "../../../components/ar/Requirements";
import PlacesPrimaryColumn from "../../../components/ar/PlacesPrimaryColumn";

const DrvCity = ({ data }) => {
  const { name, product } = data.contentfulCity;
  const requirements = data.allContentfulRequirement.nodes;
  const places = data.allContentfulPlace.nodes.slice(0, 3);
  const country = data.contentfulCountry.name;
  const cities = data.contentfulCountry.city;

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
      {places.length ? (
        <PlacesPrimaryColumn data={places}></PlacesPrimaryColumn>
      ) : null}
      <DrvCityList
        data={cities}
        title={"Operamos en las siguientes ciudades en " + country}
        desc={
          "Descubre las ciudades de " + country + " donde esta operando Didi"
        }
      ></DrvCityList>
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
    contentfulCountry(code: { eq: "ar" }) {
      name
      city {
        name
      }
    }
  }
`;

export default DrvCity;
