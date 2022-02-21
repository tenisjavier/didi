import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const FoodAboutCTA = () => {
  const props = {
    title: "¡Tu comida está muy cerca!",
    desc: "Con DiDi food puedes tener tu comida favorita en dónde lo necesites con sólo un par de clics.",
    bgColor: "bg-white",
    textColor: "gray-primary",
    image: (
      <StaticImage
        src="../../images/cl/cl-food-hero.jpg"
        alt="conductor didi"
        width={700}
        height={700}
        className="w-100 z-10 m-4 rounded"
      ></StaticImage>
    ),

    reverse: "true",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodAboutCTA;
