import React from "react";
import Layout from "../../components/Layout";
import SafetyHero from "../../components/sections/SafetyHero";
import SafetyGridBeforeTrip from "../../components/sections/SafetyGridBeforeTrip";
import SafetyGridDuringTrip from "../../components/sections/SafetyGridDuringTrip";
import SafetyGridAfterTrip from "../../components/sections/SafetyGridAfterTrip";
import SafetyGridDrv from "../../components/sections/SafetyGridDrv";

const Seguridad = () => {
  return (
    <Layout>
      <SafetyHero></SafetyHero>
      <SafetyGridBeforeTrip></SafetyGridBeforeTrip>
      <SafetyGridDuringTrip></SafetyGridDuringTrip>
      <SafetyGridAfterTrip></SafetyGridAfterTrip>
      <SafetyGridDrv></SafetyGridDrv>
    </Layout>
  );
};

export default Seguridad;
