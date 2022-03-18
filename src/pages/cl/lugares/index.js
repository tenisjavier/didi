import React from "react";
import Layout from "../../../components/Layout";
import PaxHero from "../../../components/sections/PaxHero";
import CityList from "../../../components/sections/CityList";

const Directions = () => {
  return (
    <Layout>
      <PaxHero></PaxHero>
      <CityList />
    </Layout>
  );
};

export default Directions;
