import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const HelpCenterHero = () => {
  const props = {
    title: "CENTRO DE AYUDA",
    textColor: "white",
    bgImage: (
      <StaticImage
        src="../../images/cl/cl-help-center-hero.jpg"
        alt="centro de ayuda"
        className="md:block object-fill z-0 absolute h-full w-full brightness-75"
      ></StaticImage>
    ),
    btnType: "both",
    btnMode: "primary",
  };
  return <CTASection {...props}></CTASection>;
};

export default HelpCenterHero;
