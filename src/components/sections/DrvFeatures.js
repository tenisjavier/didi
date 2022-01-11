import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const DrvFeatures = () => {
  const props = {
    title: "Te damos la mejor experiencia. En nuestra App puedes:",
    bullets: [
      "Ver el destino de todos tus viajes las 24 horas.",
      "Tener más ingresos con nuestras promociones y referidos.",
      "Tener flexibilidad para que manejes tu tiempo como quieras, además de herramientas que te ayudan a sacarle provecho a la aplicación cuando estás conectado.",
      "Apoyarte en nuestro equipo que está siempre listo para ayudarte. 7 días de la semana, 24 horas al día.",
    ],
    textColor: "gray-primary",
    bgColor: "bg-gray-light",
    image: (
      <StaticImage
        src="../../images/cl/cl-drv-features.png"
        alt="conductor didi"
        className="z-10 w-100 m-4"
      ></StaticImage>
    ),
    btnType: "drv",
    btnMode: "primary",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvFeatures;
