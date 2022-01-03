import React from "react";
import Layout from "../../components/Layout";
import HomeHero from "../../components/sections/HomeHero";
import SafetyCTA from "../../components/sections/SafetyCTA";
import DrvCTA from "../../components/sections/DrvCTA";
import PaxCTA from "../../components/sections/PaxCTA";
import HomeColumns from "../../components/sections/HomeColumns";

const Index = () => {
  return (
    <Layout>
      <HomeHero></HomeHero>
      <SafetyCTA></SafetyCTA>
      <DrvCTA></DrvCTA>
      <PaxCTA></PaxCTA>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default Index;
