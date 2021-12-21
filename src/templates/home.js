import React from "react";
import Layout from "../components/Layout";
import SectionDrvSafety from "../components/sections/SectionDrvSafety";
import SectionDrvHeader from "../components/sections/SectionDrvHeader";
import SectionHomeHeader from "../components/sections/SectionHomeHeader";
import SectionDrvWindow from "../components/sections/SectionDrvWindow";

const HomeTemplate = () => {
  return (
    <Layout>
      <SectionDrvHeader></SectionDrvHeader>
      <SectionHomeHeader></SectionHomeHeader>
      <SectionDrvSafety></SectionDrvSafety>
      <SectionDrvWindow></SectionDrvWindow>
    </Layout>
  );
};

export default HomeTemplate;
