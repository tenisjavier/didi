import React from "react";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import DrvWhyDiDi from "../../components/sections/DrvWhyDiDi";
import HomeColumns from "../../components/sections/PaxColumns";

const Pasajero = () => {
  return (
    <Layout>
      <DrvHero></DrvHero>
      <DrvWhyDiDi></DrvWhyDiDi>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default Pasajero;
