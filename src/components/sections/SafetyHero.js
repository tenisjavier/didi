import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const SafetyHero = () => {
  const props = {
    title: "EN DIDI, TU SEGURIDAD NO ES UN MITO",
    desc: "Tu seguridad es nuestra prioridad y por eso queremos demostrar con acciones reales y específicas cómo DiDi te ofrece un viaje más tranquilo y seguro. Revisa todas las funciones de seguridad que tiene nuestra app, antes, durante y después de cada viaje.",
    textColor: "white",
    bgImage: (
      <StaticImage
        src="../../images/cl/cl-safety-hero.jpg"
        alt="didi taxi"
        className="md:block object-fill z-0 absolute h-full w-full"
      ></StaticImage>
    ),
    btnType: "pax",
    btnMode: "light",
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyHero;
