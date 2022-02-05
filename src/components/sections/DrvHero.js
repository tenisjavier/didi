import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const DrvHero = () => {
  const props = {
    title: "MANEJA CON DiDi",
    desc: "Para DiDi, los socios conductores y socios taxistas son muy importantes. Por eso, nos preocupamos por tener tasas de servicio competitivas que beneficien los ingresos de los socios conductores.",
    textColor: "white",
    bgImage: (
      <StaticImage
        src="../../images/cl/bg-orange-drv-green.jpg"
        alt="conductor didi"
        className="!absolute z-0 h-full w-full md:block"
      ></StaticImage>
    ),
    btnType: "drv",
    btnMode: "light",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvHero;
