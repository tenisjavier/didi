import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const DrvCTA = () => {
  const props = {
    title: "MANEJA CON DiDi",
    desc: "Conéctate con nuestros servicios de autos particulares o taxi de manera más segura y empieza a generar ingresos extra con DiDi.Ahorra para tus vacaciones soñadas, paga la educación de tus hijos o complementa tus ingresos conectándose a la app de movilidad más grande del mundo en tu tiempo libre.Regístrate en DiDi con tus datos y los de tu vehículo y comienza a generar ingresos adicionales. Estarás activo entre 24 a 48 horas para que empieces a manejar.",
    textColor: "gray-primary",
    bgColor: "white",
    image: (
      <StaticImage
        src="../../images/cl/driver-window.jpg"
        alt="conductor didi"
        className="z-10 w-96 m-4 rounded-full"
      ></StaticImage>
    ),
    btnType: "drv",
    btnMode: "primary",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvCTA;
