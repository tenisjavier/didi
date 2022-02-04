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
        className="md:block !absolute z-0 h-full w-full"
        imgStyle={{ position: "absolute" }}
      ></StaticImage>
    ),
    btnType: "both",
    btnMode: "light",
    alignItems: "items-start",
  };
  return <CTASection {...props}></CTASection>;
};

export default HomeHero;
