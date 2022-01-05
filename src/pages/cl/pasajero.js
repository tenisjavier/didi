import React from "react";
import Layout from "../../components/Layout";
import PaxHero from "../../components/sections/PaxHero";
import PaxColumns from "../../components/sections/PaxColumns";
import SilderSection from "../../components/sections/SliderSection";
import PaxWhyDiDi from "../../components/sections/PaxWhyDiDi";
import PaxBanner from "../../components/sections/PaxBanner";
import HomeColumns from "../../components/sections/HomeColumns";

const Pasajero = () => {
  return (
    <Layout>
      <PaxHero></PaxHero>
      <PaxColumns></PaxColumns>
      <SilderSection title="Hay un DiDi Para ti"></SilderSection>
      <PaxWhyDiDi></PaxWhyDiDi>
      <PaxBanner></PaxBanner>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default Pasajero;
