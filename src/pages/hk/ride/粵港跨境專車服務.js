import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import SpecialCarPaxHero from "../../../components/sections/SpecialCarPaxHero";
import BookBusRideColumns from "../../../components/sections/BookBusRideColumns";
import BusinessModelColumns from "../../../components/sections/BusinessModelColumns";

const SpecialCar = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const taxiHeroBgImage = images.filter((image) => {
    return image.title === "hk.GuandongCar.bgImage";
  })[0];
  const bookBusRideColumns = images.filter((image) => {
    return image.title === "hk.SpecialBookingColumns.image";
  });
  const businessModelColumns = images.filter((image) => {
    return image.title === "hk.LuxuryModelColumns.image";
  });

  return (
    <Layout sb={false}>
      <SpecialCarPaxHero bgImage={taxiHeroBgImage}></SpecialCarPaxHero>
      <BookBusRideColumns images={bookBusRideColumns}></BookBusRideColumns>
      <BusinessModelColumns
        images={businessModelColumns}
      ></BusinessModelColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: {
          in: [
            "hk.GuandongCar.bgImage"
            "hk.SpecialBookingColumns.image"
            "hk.LuxuryModelColumns.image"
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

export default SpecialCar;
