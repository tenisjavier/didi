import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const FoodAboutHero = () => {
  const props = {
    title: "Acerca de DiDi Food",
    desc: "Pide comida a través de nuestra plataforma o conviértete en un socio restaurante de DiDi Food y aprovecha los beneficios que tenemos para tu negocio.",
    textColor: "white",
    bgImage: (
      <StaticImage
        src="../../images/cl/cl-food-about-hero.jpg"
        alt="Acerca de DiDi Food"
        className="!absolute z-0 h-full w-full brightness-50  md:block"
      ></StaticImage>
    ),
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodAboutHero;
