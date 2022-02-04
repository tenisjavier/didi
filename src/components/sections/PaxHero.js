import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const PaxHero = () => {
  const props = {
    title:
      "CONECTA TU PRÓXIMO VIAJE CON DIDI, LA APP EN LA QUE PAGAS MENOS Y RECIBES MÁS",
    textColor: "white",
    bgImage: (
      <StaticImage
        src="../../images/cl/cl-pax-hero.png"
        alt="pasajera didi con celular"
        className="md:block !absolute z-0 h-full w-full"
      ></StaticImage>
    ),
    btnType: "pax",
    btnMode: "light",
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxHero;
