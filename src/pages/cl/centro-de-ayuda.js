import React from "react";
import Layout from "../../components/Layout";
import HelpCenterHero from "../../components/sections/HelpCenterHero";
import HelpCenterFAQDelivery from "../../components/sections/HelpCenterFAQDelivery";
import HelpCenterFAQDrv from "../../components/sections/HelpCenterFAQDrv";
import HelpCenterFAQPax from "../../components/sections/HelpCenterFAQPax";
import HelpCenterFAQTaxi from "../../components/sections/HelpCenterFAQTaxi";
import HomeColumns from "../../components/sections/HomeColumns";

const CentroDeAyuda = () => {
  return (
    <Layout>
      <HelpCenterHero></HelpCenterHero>
      <HelpCenterFAQDelivery></HelpCenterFAQDelivery>
      <HelpCenterFAQDrv></HelpCenterFAQDrv>
      <HelpCenterFAQPax></HelpCenterFAQPax>
      <HelpCenterFAQTaxi></HelpCenterFAQTaxi>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default CentroDeAyuda;
