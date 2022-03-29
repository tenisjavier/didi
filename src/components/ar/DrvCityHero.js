import React from "react";
import CTASection from "../CTASection";

const DrvCityHero = ({ data }) => {
  const {
    name,
    geometry: { lat, lon },
  } = data;

  const props = {
    title: `Socios Conductores en  ${name}`,
    desc: `¿Quieres convertirte en Socio Conductor DiDi en ${name}?. Regístrate online y comienza a generar ingresos de manera segura y flexible. `,
    textColor: "white",
    bgColor: "bg-blue-primary",
    image: (
      <img
        className="md:w-100 lg:w-110 z-10 m-4 w-full rounded"
        alt={name + " mapa"}
        src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=12&size=1200x500&maptype=roadmap
&markers=color:red%7C${lat},${lon}&key=${process.env.GATSBY_GOOGLE_API_KEY}`}
      ></img>
    ),
    btnType: "drv",
    btnMode: "primary",
    reverse: "true",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvCityHero;
