import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const DrvWhyDiDi = () => {
  const props = {
    title:
      "Tu seguridad es nuestra prioridad. Por eso tenemos herramientas pensadas para ti:",
    bullets: [
      "Comparte tu viaje.",
      "Privacidad de números telefónicos.",
      "Desvincular usuario.",
    ],
    textColor: "gray-primary",
    image: (
      <StaticImage
        src="../../images/cl/cl-drv-why-didi.jpg"
        alt="conductor didi"
        className="w-100 z-10 m-4 rounded-full"
      ></StaticImage>
    ),
    btnType: "drv",
    btnMode: "primary",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvWhyDiDi;
