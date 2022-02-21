import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const FoodDeliveryCTA = () => {
  const props = {
    title: "Regístrate para repartir a través de DiDi Food",
    desc: "Inscribirse es fácil. Puedes elegir repartir en moto, bicicleta o auto. Tú eliges cuando y dónde conectarte.",
    bgColor: "bg-white",
    textColor: "gray-primary",
    image: (
      <StaticImage
        src="../../images/cl/cl-food-delivery-cta.jpg"
        alt="conductor didi"
        width={700}
        height={700}
        className="w-100 z-10 m-4 rounded"
      ></StaticImage>
    ),
    btnType: "foodDelivery",
    btnMode: "primary",
    reverse: "true",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodDeliveryCTA;
