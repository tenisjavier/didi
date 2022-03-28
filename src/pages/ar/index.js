import React from "react";
import Layout from "../../components/Layout";
import HomeHero from "../../components/ar/HomeHero";
import SafetyCTA from "../../components/ar/SafetyCTA";
import DrvCTA from "../../components/ar/DrvCTA";
import PaxCTA from "../../components/ar/PaxCTA";
import HomeColumns from "../../components/ar/HomeColumns";

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
