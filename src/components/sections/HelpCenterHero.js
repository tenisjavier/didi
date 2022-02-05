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
        className="!absolute z-0 h-full w-full brightness-75 md:block"
      ></StaticImage>
    ),
    btnType: "both",
    btnMode: "primary",
  };
  return <CTASection {...props}></CTASection>;
};

export default HelpCenterHero;
