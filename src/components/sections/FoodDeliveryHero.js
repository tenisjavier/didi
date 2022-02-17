import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const FoodDeliveryHero = () => {
  const props = {
    title: "¡Conéctate con DiDi Food! Genera ganancias adicionales",
    desc: "Comenzar es sencillo y tú mismo estableces tu horario",
    textColor: "white",
    bgImage: (
      <StaticImage
        src="../../images/cl/cl-food-delivery-hero.jpg"
        alt="pasajera didi con celular"
        className="!absolute z-0 h-full w-full brightness-50  md:block"
      ></StaticImage>
    ),
    btnType: "foodDelivery",
    btnMode: "primary",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodDeliveryHero;
