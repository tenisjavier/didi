import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const SafetyHero = () => {
  const props = {
    title: "En DiDi tu seguridad no es un mito",
    desc: "Tu seguridad es nuestra prioridad y por eso queremos demostrar con acciones reales y específicas cómo DiDi te ofrece un viaje más tranquilo y seguro. Revisa todas las funciones de seguridad que tiene nuestra app, antes, durante y después de cada viaje.",
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
