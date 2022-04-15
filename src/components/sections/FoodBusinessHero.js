import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const FoodBusinessHero = () => {
  const props = {
    hero: true,
    title: "Conviértete en un socio restaurante de DiDi Food",
    desc: "Aprovecha los beneficios que DiDi Food tiene para tu negocio. Call Center: (+56) 227120527",
    textColor: "white",
    bgImage: (
      <StaticImage
        src="../../images/cl/cl-food-business-hero.jpg"
        alt="pasajera didi con celular"
        className="!absolute z-0 h-full w-full brightness-50  md:block"
      ></StaticImage>
    ),
    btnType: "foodBusiness",
    btnMode: "primary",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodBusinessHero;
