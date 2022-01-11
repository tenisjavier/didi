import React from "react";
import Layout from "../../components/Layout";
import DrvHero from "../../components/sections/DrvHero";
import DrvWhyDiDi from "../../components/sections/DrvWhyDiDi";
import DrvVideoGrid from "../../components/sections/DrvVideoGrid";
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
      <DrvVideoGrid></DrvVideoGrid>
      <DrvBanner></DrvBanner>
      <DrvFeatures></DrvFeatures>
      <SilderSection title="Hay un DiDi Para ti"></SilderSection>
      <DrvRequirements></DrvRequirements>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default Pasajero;
