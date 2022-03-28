import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const DrvCTA = () => {
  const props = {
    title: "Manejá con DiDi",
    desc: "Conectate con nuestros servicios de autos particulares o taxi de manera más segura y empezá a generar ingresos extra con DiDi. Ahorrá para tus vacaciones soñadas, pagá la educación de tus hijos o complementá tus ingresos conectándose a la app de movilidad más grande del mundo en tu tiempo libre. Registrate en DiDi con tus datos y los de tu vehículo y comenzá a generar ingresos adicionales. Estarás activo entre 24 a 48 horas para que empecés a manejar.",
    bgColor: "bg-gray-light",
    textColor: "gray-primary",
    image: (
      <StaticImage
        src="../../images/cl/driver-window.jpg"
        alt="conductor didi"
        width={700}
        height={700}
        className="w-100 z-10 m-4 rounded-full"
      ></StaticImage>
    ),
    btnType: "drv",
    btnMode: "primary",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvCTA;
