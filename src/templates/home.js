import React from "react";
import Layout from "../components/Layout";
import Btn from "../components/Btn";
//import SectionHomeHeader from "../components/sections/SectionHomeHeader";
import SectionDrvHeader from "../components/sections/SectionDrvHeader";
import SectionHomeHeader from "../components/sections/SectionHomeHeader";

const HomeTemplate = () => {
  return (
    <Layout>
      <SectionDrvHeader></SectionDrvHeader>
      <SectionHomeHeader></SectionHomeHeader>
      <div className="py-28 px-8">
        <Btn type="drv" mode=""></Btn>
      </div>
    </Layout>
  );
};

export default HomeTemplate;
