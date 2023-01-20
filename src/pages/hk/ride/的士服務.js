import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import TaxiPaxHero from "../../../components/sections/TaxiPaxHero";
import BookRideColumns from "../../../components/sections/BookRideColumns";

const Taxi = ({ data }) => {
  const images = data.allContentfulAsset.nodes;
  const taxiHeroBgImage = images.filter((image) => {
    return image.title === "hk.TaxiHero.bgImage";
  })[0];
  const bookRideColumns = images.filter((image) => {
    return image.title === "hk.BookRideColumns.image";
  });

  return (
    <Layout sb={false}>
      <TaxiPaxHero bgImage={taxiHeroBgImage}></TaxiPaxHero>
      <BookRideColumns images={bookRideColumns}></BookRideColumns>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulAsset(
      filter: {
        title: { in: ["hk.TaxiHero.bgImage", "hk.BookRideColumns.image"] }
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
