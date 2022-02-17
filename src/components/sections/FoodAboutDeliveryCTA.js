import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const FoodAboutDeliveryCTA = () => {
  const props = {
    title:
      "La plataforma rápida y confiable de intermediación de pedidos y entrega de comida.",
    desc: "Sobre nosotros – DiDi Food conecta usuarios con socios restaurantes y socios repartidores para llevar los mejores pedidos de comida a la puerta del usuario. A través de DiDi Food, puedes tener tu plato favorito en donde lo necesites, con un par de clics.",
    bgColor: "bg-gray-light",
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
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodAboutDeliveryCTA;
