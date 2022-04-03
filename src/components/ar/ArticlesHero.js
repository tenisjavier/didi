import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const PaxHero = () => {
  const props = {
    title: "DiDi Artículos",
    desc: "Averiguá sobre lugares interesantes y divertidos de ir a visitar. Tomá un DiDi para viajar barato y seguro.",
    textColor: "white",
    bgImage: (
      <StaticImage
        src="../../images/cl/cl-pax-hero.png"
        alt="pasajera didi con celular"
        className="!absolute z-0 h-full w-full md:block"
      ></StaticImage>
    ),
    btnType: "pax",
    btnMode: "light",
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxHero;
