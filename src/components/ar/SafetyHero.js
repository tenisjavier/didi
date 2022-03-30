import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const SafetyHero = () => {
  const props = {
    title: "En DiDi tu seguridad es nuestra prioridad",
    desc: "Conocé aquí las funcionalidades y medidas de seguridad que hemos tomado para que tu próximo viaje lo disfrutes al máximo.",
    textColor: "white",
    bgImage: (
      <StaticImage
        src="../../images/cl/cl-safety-hero.jpg"
        alt="didi taxi"
        className="!absolute z-0 h-full w-full md:block"
      ></StaticImage>
    ),
    btnType: "pax",
    btnMode: "light",
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyHero;
