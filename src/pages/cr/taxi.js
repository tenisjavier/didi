import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import TaxiHero from "../../components/sections/TaxiHero";
import TaxiWhyDidi from "../../components/sections/TaxiWhyDiDi";
import Requirements from "../../components/sections/Requirements";
import HomeColumns from "../../components/sections/HomeColumns";
import KnowMoreBanner from "../../components/sections/KnowMoreBanner";
import useScreenSize  from "../../hooks/useScreenSize";
import TaxiVFE from "../../components/sections/Taxi/TaxiVFE";
import TaxiRegister from "../../components/sections/Taxi/TaxiRegister";
import TaxiSafety from "../../components/sections/Taxi/TaxiSafety";
import TaxiContact from "../../components/sections/Taxi/TaxiContact";
import ContactColumns from "../../components/sections/ContactColumns";
import ContactBenefits from "../../components/sections/ContactBenefits";
const Taxi = ({ data }) => {
  let bgImage = null;
  const images = data.allContentfulAsset.nodes;
  const taxiHeroBgImage = images.filter((image) => {
    return image.title === "cr.TaxiHero.bgImage";
  })[0];
  bgImage = taxiHeroBgImage;
  const taxiHeroMobileBgImage = images.filter((image) => {
    return image.title === "cr.TaxiHeroMobile.bgImage";
  })[0];
  const taxiWhyDiDiImage = images.filter((image) => {
    return image.title === "cl.TaxiWhyDiDi.image";
  })[0];

  const products = data.allContentfulProduct.nodes;

  if(useScreenSize() < 1280) {
    bgImage = taxiHeroMobileBgImage;
  }

  return (
    <Layout>
      <TaxiHero bgImage={bgImage}></TaxiHero>
      <TaxiVFE image={taxiWhyDiDiImage}></TaxiVFE>
      <TaxiRegister image={taxiWhyDiDiImage}></TaxiRegister>
      <TaxiSafety image={taxiWhyDiDiImage}></TaxiSafety>
      <TaxiContact image={taxiWhyDiDiImage}></TaxiContact>
      {/* <ContactColumns></ContactColumns>
      <ContactBenefits></ContactBenefits> */}
      <Requirements data={products}></Requirements>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: { title: { in: ["cr.TaxiHero.bgImage", "cr.TaxiHeroMobile.bgImage", "cl.TaxiWhyDiDi.image"] } }
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
        country: { elemMatch: { code: { eq: "cr" } } }
        name: { eq: "DiDi Taxi Costa Rica" }
      }
    ) {
      nodes {
        name
        phone
        requirement {
          raw
        }
      }
    }
  }
`;

export default Taxi;
