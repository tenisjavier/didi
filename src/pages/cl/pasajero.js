import React from "react";
import Layout from "../../components/Layout";
import PaxHero from "../../components/sections/PaxHero";
import PaxColumns from "../../components/sections/PaxColumns";
import PaxWhyDiDi from "../../components/sections/PaxWhyDiDi";
import HomeColumns from "../../components/sections/HomeColumns";

const Pasajero = () => {
  return (
    <Layout>
      <PaxHero></PaxHero>
      <PaxColumns></PaxColumns>
      <PaxWhyDiDi></PaxWhyDiDi>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default Pasajero;
