import React from "react";
import Layout from "../../components/Layout";
import TaxiHero from "../../components/sections/TaxiHero";
import TaxiWhyDidi from "../../components/sections/TaxiWhyDiDi";
import HomeColumns from "../../components/sections/HomeColumns";
import TaxiBanner from "../../components/sections/TaxiBanner";

const Taxi = () => {
  return (
    <Layout>
      <TaxiHero></TaxiHero>
      <TaxiWhyDidi></TaxiWhyDidi>
      <HomeColumns></HomeColumns>
      <TaxiBanner></TaxiBanner>
    </Layout>
  );
};

export default Taxi;
