import React from "react";
import FoodDeliveryHero from "../../../components/sections/FoodDeliveryHero";
import FoodDeliveryColumns from "../../../components/sections/FoodDeliveryColumns";
import FoodDeliveryDownloadsColumns from "../../../components/sections/FoodDeliveryDownloadsColumns";
import FoodDeliveryStepsColumns from "../../../components/sections/FoodDeliveryStepsColumns";

const FoodDelivery = ({ data }) => {
  return (
    <>
      <FoodDeliveryHero></FoodDeliveryHero>
      <FoodDeliveryColumns></FoodDeliveryColumns>
      <FoodDeliveryStepsColumns></FoodDeliveryStepsColumns>
      <FoodDeliveryDownloadsColumns></FoodDeliveryDownloadsColumns>
    </>
  );
};

export default FoodDelivery;
