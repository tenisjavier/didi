import React from "react";
import Layout from "../components/Layout";
import CTASection from "../components/CTASection";

const WpTemplate = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <Layout>
      <CTASection
        title={`Conductor DiDi en ${city}`}
        desc={`DiDi te da seguridad en todas las ciudades del país`}
        textColor="gray-primary"
        bgColor="bg-white"
        btnType="drv"
        btnMode=""
        reverse="true"
      ></CTASection>
    </Layout>
  );
};

export default WpTemplate;
