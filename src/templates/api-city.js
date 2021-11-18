import React, { useEffect, useState} from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";


const WpTemplate = ({ pageContext }) => {
  const { city, country } = pageContext;
  const map_link = `https://maps.googleapis.com/maps/api/staticmap?center=${city},${country}
  &zoom=12
  &size=800x800
  &key=${process.env.API_KEY}`
  return (
    <Layout>
      <h3 className="text-3xl text-yellow-500 font-bold pt-32">Conductor DiDi en {city}</h3>
      <img
        src={map_link}
      />
    </Layout>
  );
};

export default WpTemplate;
