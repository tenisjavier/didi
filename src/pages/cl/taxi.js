import React from "react";
import Layout from "../../components/Layout";
import TaxiHero from "../../components/sections/TaxiHero";
import TaxiWhyDidi from "../../components/sections/TaxiWhyDiDi";
import TaxiRequirements from "../../components/sections/TaxiRequirements";
import HomeColumns from "../../components/sections/HomeColumns";
import KnowMoreBanner from "../../components/sections/KnowMoreBanner";

const Taxi = () => {
  return (
    <Layout>
      <TaxiHero></TaxiHero>
      <TaxiWhyDidi></TaxiWhyDidi>
      <TaxiRequirements></TaxiRequirements>
      <KnowMoreBanner></KnowMoreBanner>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default Taxi;
