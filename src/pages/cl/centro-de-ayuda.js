import React from "react";
import Layout from "../../components/Layout";
import HelpCenterHero from "../../components/sections/HelpCenterHero";
import HelpCenterFAQ from "../../components/sections/HelpCenterFAQ";
import HomeColumns from "../../components/sections/HomeColumns";

const CentroDeAyuda = () => {
  return (
    <Layout>
      <HelpCenterHero></HelpCenterHero>
      <HelpCenterFAQ></HelpCenterFAQ>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default CentroDeAyuda;
