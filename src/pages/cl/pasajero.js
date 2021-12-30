import React from "react";
import Layout from "../../components/Layout";
import PaxHero from "../../components/sections/PaxHero";
import PaxColumns from "../../components/sections/PaxColumns";

const Pasajero = () => {
  return (
    <Layout>
      <PaxHero></PaxHero>
      <PaxColumns></PaxColumns>
    </Layout>
  );
};

export default Pasajero;
