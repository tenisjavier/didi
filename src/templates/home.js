import React from "react";
import Layout from "../components/Layout";
import SectionDrvSafety from "../components/sections/SectionDrvSafety";
import SectionDrvHeader from "../components/sections/SectionDrvHeader";
import SectionHomeHeader from "../components/sections/SectionHomeHeader";
import SectionDrvWindow from "../components/sections/SectionDrvWindow";
import SectionDrvPorqueViajar from "../components/sections/SectionDrvPorqueViajar";

const HomeTemplate = () => {
  return (
    <Layout>
      <SectionHomeHeader></SectionHomeHeader>

      <SectionDrvSafety></SectionDrvSafety>
      <SectionDrvHeader></SectionDrvHeader>

      <SectionDrvWindow></SectionDrvWindow>
      <SectionDrvPorqueViajar></SectionDrvPorqueViajar>
    </Layout>
  );
};

export default HomeTemplate;
