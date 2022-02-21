import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const FoodBusinessCTA = () => {
  const props = {
    title: "Registra tu comercio en DiDi Food",
    desc: "Conviértete en un socio restaurante de DiDi Food y aprovecha los beneficios que tenemos para tu negocio.",
    bgColor: "bg-gray-light",
    textColor: "gray-primary",
    image: (
      <StaticImage
        src="../../images/cl/cl-food-comercio-cta.jpg"
        alt="conductor didi"
        width={700}
        height={700}
        className="w-100 z-10 m-4 rounded"
      ></StaticImage>
    ),
    btnType: "foodBusiness",
    btnMode: "primary",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodBusinessCTA;
