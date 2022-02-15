import React from "react";
import Layout from "../../components/Layout";
import FoodHero from "../../components/sections/FoodHero";
import FoodComercioCTA from "../../components/sections/FoodComercioCTA";
import FoodColumns from "../../components/sections/FoodColumns";
import FoodDeliveryCTA from "../../components/sections/FoodDeliveryCTA";

const Food = () => {
  return (
    <Layout>
      <FoodHero></FoodHero>
      <FoodColumns></FoodColumns>
      <FoodComercioCTA></FoodComercioCTA>
      <FoodDeliveryCTA></FoodDeliveryCTA>
    </Layout>
  );
};

export default Food;
