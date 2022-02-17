import React from "react";
import Layout from "../../../components/Layout";
import FoodDeliveryHero from "../../../components/sections/FoodDeliveryHero";
import FoodDeliveryColumns from "../../../components/sections/FoodDeliveryColumns";
import FoodDeliveryDownloadsColumns from "../../../components/sections/FoodDeliveryDownloadsColumns";
import FoodDeliveryStepsColumns from "../../../components/sections/FoodDeliveryStepsColumns";

const FoodDelivery = ({ data }) => {
  return (
    <Layout>
      <FoodDeliveryHero></FoodDeliveryHero>
      <FoodDeliveryColumns></FoodDeliveryColumns>
      <FoodDeliveryStepsColumns></FoodDeliveryStepsColumns>
      <FoodDeliveryDownloadsColumns></FoodDeliveryDownloadsColumns>
    </Layout>
  );
};

export default FoodDelivery;
