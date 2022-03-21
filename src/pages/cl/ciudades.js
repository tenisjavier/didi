import React from "react";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import DrvCityList from "../../components/sections/DrvCityList";

const Directions = () => {
  return (
    <Layout>
      <DrvHero></DrvHero>
      <DrvCityList></DrvCityList>
    </Layout>
  );
};

export default Directions;
