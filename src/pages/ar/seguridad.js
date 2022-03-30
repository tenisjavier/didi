import React from "react";
import Layout from "../../components/Layout";
import SafetyHero from "../../components/ar/SafetyHero";
import SafetyGridBeforeTrip from "../../components/ar/SafetyGridBeforeTrip";
import SafetyGridDuringTrip from "../../components/ar/SafetyGridDuringTrip";
import SafetyGridAfterTrip from "../../components/ar/SafetyGridAfterTrip";
import SafetyGridDrv from "../../components/ar/SafetyGridDrv";

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
