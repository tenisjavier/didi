import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const FoodHero = () => {
  const props = {
    hero: true,
    title: "DiDi Food: Tu comida cuando quieras, donde quieras",
    desc: "Pide comida a través de nuestra plataforma. De tu restaurante favorito a la puerta de tu casa.",
    textColor: "white",
    bgImage: (
      <StaticImage
        src="../../images/cl/cl-food-hero.jpg"
        alt="pasajera didi con celular"
        className="!absolute z-0 h-full w-full brightness-50  md:block"
      ></StaticImage>
    ),
    btnType: "foodBusiness",
    btnMode: "primary",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodHero;
