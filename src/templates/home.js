import React from "react";
import Layout from "../components/Layout";
import Btn from "../components/Btn";

const HomeTemplate = () => {
  return (
    <Layout>
      <div className="py-28 px-8">
        <Btn type="pax" mode="light"></Btn>
      </div>
    </Layout>
  );
};

export default HomeTemplate;
