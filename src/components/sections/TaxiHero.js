import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const DrvHero = () => {
  const props = {
    title: "DiDi TAXI",
    desc: "Los taxis de siempre con acceso a la experiencia de servicio y la tecnología DiDi.Recibe pedidos de viaje a través de la app o recoge a los usuarios en la calle y conecta el viaje a través de DiDi Taxi.",
    textColor: "white",
    bgImage: (
      <StaticImage
        src="../../images/cl/cl-bg-taxi-hero.jpg"
        alt="didi taxi"
        className="md:block !absolute z-0 h-full w-full"
      ></StaticImage>
    ),
    btnType: "drv",
    btnMode: "primary",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvHero;
