import React from "react";

// import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import DrvCTA from "../components/sections/DrvCTA";
import HomeColumns from "../components/sections/HomeColumns";

const HomeTemplate = () => {
  return (
    <Layout>
      <DrvCTA></DrvCTA>
      <HomeColumns></HomeColumns>
    </Layout>
  );
};

export default HomeTemplate;
