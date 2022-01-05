import React from "react";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import DrvWhyDiDi from "../../components/sections/DrvWhyDiDi";
import DrvBanner from "../../components/sections/DrvBanner";
import DrvFeatures from "../../components/sections/DrvFeatures";
import HomeColumns from "../../components/sections/PaxColumns";
import SilderSection from "../../components/sections/SliderSection";
import DrvRequirements from "../../components/sections/DrvRequirements";
import KnowMoreBanner from "../../components/sections/KnowMoreBanner";

const Pasajero = () => {
  return (
    <Layout>
      <DrvHero></DrvHero>
      <DrvWhyDiDi></DrvWhyDiDi>
      <DrvBanner></DrvBanner>
      <DrvFeatures></DrvFeatures>
      <HomeColumns></HomeColumns>
      <SilderSection title="Hay un DiDi Para ti"></SilderSection>
      <DrvRequirements></DrvRequirements>
      <KnowMoreBanner></KnowMoreBanner>
    </Layout>
  );
};

export default Pasajero;
