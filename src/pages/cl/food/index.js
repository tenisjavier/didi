import React from "react";
import FoodHero from "../../../components/sections/FoodHero";
import FoodBusinessCTA from "../../../components/sections/FoodBusinessCTA";
import FoodColumns from "../../../components/sections/FoodColumns";
import FoodDeliveryCTA from "../../../components/sections/FoodDeliveryCTA";

const Food = () => {
  return (
    <>
      <FoodHero></FoodHero>
      <FoodColumns></FoodColumns>
      <FoodBusinessCTA></FoodBusinessCTA>
      <FoodDeliveryCTA></FoodDeliveryCTA>
    </>
  );
};

export default Food;
