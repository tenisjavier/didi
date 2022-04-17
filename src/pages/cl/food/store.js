import React from "react";
import { graphql } from "gatsby";
import FoodBusinessHero from "../../../components/sections/FoodBusinessHero";
import FoodBusinessColumns from "../../../components/sections/FoodBusinessColumns";
import FoodDownloadsColumns from "../../../components/sections/FoodDownloadsColumns";
import Requirements from "../../../components/sections/Requirements";

const FoodBusiness = ({ data }) => {
  const products = data.allContentfulProduct.nodes;

  return (
    <>
      <FoodBusinessHero></FoodBusinessHero>
      <FoodBusinessColumns></FoodBusinessColumns>
      <FoodDownloadsColumns></FoodDownloadsColumns>
      <Requirements data={products}></Requirements>
    </>
  );
};

export const query = graphql`
  query {
    allContentfulProduct(
      filter: {
        country: { elemMatch: { code: { eq: "cl" } } }
        category: { eq: "food" }
        name: { eq: "Food Business" }
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

export default FoodBusiness;
