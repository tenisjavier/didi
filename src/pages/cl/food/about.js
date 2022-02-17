import React from "react";
import Layout from "../../../components/Layout";
import FoodAboutHero from "../../../components/sections/FoodAboutHero";
import FoodAboutDeliveryCTA from "../../../components/sections/FoodAboutDeliveryCTA";
import FoodAboutCTA from "../../../components/sections/FoodAboutCTA";

const FoodDelivery = ({ data }) => {
  return (
    <Layout>
      <FoodAboutHero></FoodAboutHero>
      <FoodAboutDeliveryCTA></FoodAboutDeliveryCTA>
      <FoodAboutCTA></FoodAboutCTA>
    </Layout>
  );
};

export default FoodDelivery;
