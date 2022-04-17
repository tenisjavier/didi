import React from "react";
import FoodAboutHero from "../../../components/sections/FoodAboutHero";
import FoodAboutDeliveryCTA from "../../../components/sections/FoodAboutDeliveryCTA";
import FoodAboutCTA from "../../../components/sections/FoodAboutCTA";

const FoodDelivery = ({ data }) => {
  return (
    <>
      <FoodAboutHero></FoodAboutHero>
      <FoodAboutDeliveryCTA></FoodAboutDeliveryCTA>
      <FoodAboutCTA></FoodAboutCTA>
    </>
  );
};

export default FoodDelivery;
