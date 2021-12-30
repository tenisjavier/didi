import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const HomeHero = () => {
  const props = {
    title: "MUÉVETE POR TU CIUDAD",
    textColor: "white",
    bgImage: (
      <StaticImage
        src="../../images/cl/bg-orange-pax-red.jpg"
        alt="Pasajera Subiendo a DiDi"
        className="md:block object-fill z-0 absolute h-full w-full"
      ></StaticImage>
    ),
    bgMobileImage: (
      <StaticImage
        src="../../images/cl/driver-window.jpg"
        alt="conductor didi"
        className="block md:hidden object-fill z-0 absolute h-full w-full"
      ></StaticImage>
    ),
    btnType: "both",
    btnMode: "light",
    alignItems: "items-start",
  };
  return <CTASection {...props}></CTASection>;
};

export default HomeHero;
