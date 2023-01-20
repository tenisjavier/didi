import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import TaxiHero from "../../components/sections/TaxiHero";
import TaxiWhyDidi from "../../components/sections/TaxiWhyDiDi";
import RegistrationProccessColumns from "../../components/sections/RegistrationProccessColumns";
import WhyDiDiColumns from "../../components/sections/WhyDiDiColumns";

const Taxi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const taxiHeroBgImage = images.filter((image) => {
    return image.title === "hk.TaxiHero.bgImage";
  })[0];

  const registrationProccessColumns = images.filter((image) => {
    return image.title === "hk.RegistrationProccessColumns.image";
  });

  const taxiWhyDiDiImage = images.filter((image) => {
    return image.title === "hk.WhyDiDiCTA.bgImage";
  })[0];

  const whyDiDiImage = images.filter((image) => {
    return image.title === "hk.WhyDiDiColumns.image";
  });

  return (
    <Layout sb={false}>
      <TaxiHero bgImage={taxiHeroBgImage}></TaxiHero>
      <RegistrationProccessColumns
        images={registrationProccessColumns}
      ></RegistrationProccessColumns>
      <TaxiWhyDidi image={taxiWhyDiDiImage}></TaxiWhyDidi>
      <WhyDiDiColumns images={whyDiDiImage}></WhyDiDiColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "hk.TaxiHero.bgImage"
            "hk.WhyDiDiColumns.image"
            "hk.RegistrationProccessColumns.image"
            "hk.WhyDiDiCTA.bgImage"
          ]
        }
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

export default Taxi;
