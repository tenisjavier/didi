import React from "react";
import Layout from "../components/Layout";
import Btn from "../components/Btn";
import SectionDrvSafety from "../components/sections/SectionDrvSafety";
import SectionDrvHeader from "../components/sections/SectionDrvHeader";
import SectionHomeHeader from "../components/sections/SectionHomeHeader";

const HomeTemplate = () => {
  return (
    <Layout>
      <SectionDrvHeader></SectionDrvHeader>
      <SectionHomeHeader></SectionHomeHeader>
      <SectionDrvSafety></SectionDrvSafety>
      <div className="py-28 px-8">
        <Btn type="drv" mode="light"></Btn>
      </div>
    </Layout>
  );
};

export default HomeTemplate;
