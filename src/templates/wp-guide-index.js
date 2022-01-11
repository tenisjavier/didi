import React from "react";
import Layout from "../components/Layout";
import GuidesGrid from "../components/sections/GuidesGrid";
const Guias = ({ pageContext }) => {
  const { allData: guias } = pageContext;
  return (
    <Layout>
      <GuidesGrid guias={guias} />
    </Layout>
  );
};

export default Guias;
