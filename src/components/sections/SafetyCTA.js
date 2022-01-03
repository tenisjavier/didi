import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const SafetyCTA = () => {
  const props = {
    title: "EN DIDI, TU SEGURIDAD ES NUESTRA PRIORIDAD",
    desc: "Revisa todas las funciones de seguridad que tiene nuestra app, antes, durante y después de cada viaje",
    textColor: "white",
    bgColor: "bg-sky-500",
    image: (
      <StaticImage
        src="../../images/cl/logo-funciones-seguridad.png"
        alt="seguridad logo"
        className="z-10 w-96 m-4"
      ></StaticImage>
    ),

    btnText: "Saber Más",
    btnLink: "/seguridad/",
    btnMode: "light",
    reverse: "true",
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyCTA;
