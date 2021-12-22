import React from "react";
import Layout from "../components/Layout";
import SectionTemplate from "../components/sections/SectionTemplate";

const WpTemplate = ({ pageContext }) => {
  const { city, country } = pageContext;
  const map_link = `https://maps.googleapis.com/maps/api/staticmap?center=${city},${country}
  &zoom=12
  &size=800x800
  &key=${process.env.API_KEY}`;
  return (
    <Layout>
      <SectionTemplate
        title={`Conductor DiDi en ${city}`}
        desc={`DiDi te da seguridad en todas las ciudades del país`}
        textColor="gray-primary"
        bgColor="bg-white"
        btnType="drv"
        btnMode=""
        map={map_link}
        reverse="true"
      ></SectionTemplate>
    </Layout>
  );
};

export default WpTemplate;
