import React from "react";
import Layout from "../components/Layout";

const WpTemplate = ({ pageContext }) => {
  const { city } = pageContext;

  return (
    <Layout>
      <h3>Conductor DiDi en {city}</h3>
    </Layout>
  );
};

export default WpTemplate;
