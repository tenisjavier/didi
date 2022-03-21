import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout";
import CTASection from "../../../components/CTASection";
import SilderSection from "../../../components/sections/SliderSection";
import DrvCityList from "../../../components/sections/DrvCityList";

const DrvCity = ({ data }) => {
  const {
    name,
    product,
    geometry: { lat, lon },
  } = data.contentfulCity;

  return (
    <Layout>
      <CTASection
        title={`Socios Conductores en  ${name}`}
        desc={`¿Quieres convertirte en Socio Conductor DiDi en ${name}?. Regístrate online y comienza a generar ingresos de manera segura y flexible. `}
        textColor="white"
        bgColor="bg-blue-primary"
        image={
          <img
            className="md:w-100 lg:w-110 z-10 m-4 w-full rounded"
            alt={name + " mapa"}
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=12&size=1200x500&maptype=roadmap
&markers=color:red%7C${lat},${lon}&key=${process.env.GATSBY_GOOGLE_API_KEY}`}
          ></img>
        }
        btnType="drv"
        btnMode="primary"
        reverse="true"
      ></CTASection>
      <SilderSection
        data={product}
        title={`Nuestros Servicios en ${name}`}
      ></SilderSection>
      <DrvCityList></DrvCityList>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    contentfulCity(id: { eq: $id }) {
      name
      product {
        name
        description
        image {
          gatsbyImageData
        }
        country {
          code
        }
      }
      geometry {
        lat
        lon
      }
    }
  }
`;

export default DrvCity;
