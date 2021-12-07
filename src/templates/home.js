import React from "react";
import Layout from "../components/Layout";
import BtnPax from "../components/BtnPax";

const HomeTemplate = () => {
  return (
    <Layout>
      <div className="pt-28">
        <BtnPax mode="light"></BtnPax>
      </div>
    </Layout>
  );
};

export default HomeTemplate;
