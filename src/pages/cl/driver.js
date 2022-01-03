import React from "react";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import DrvWhyDiDi from "../../components/sections/DrvWhyDiDi";
import HomeColumns from "../../components/sections/PaxColumns";
import SilderSection from "../../components/sections/SliderSection";
import Requerimientos from "../../components/sections/Requerimiento";

const Pasajero = () => {
  return (
    <Layout>
      <DrvHero></DrvHero>
      <DrvWhyDiDi></DrvWhyDiDi>
      <HomeColumns></HomeColumns>
      <SilderSection title="Hay un DiDi Para ti"></SilderSection>
      <Requerimientos></Requerimientos>
    </Layout>
  );
};

export default Pasajero;
