import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const PaxWhyDiDi = () => {
  const props = {
    title: "Por qué viajar hoy con DiDi:",
    bullets: [
      "Viajes a pedido. Obtén un viaje confiable en minutos, a cualquier hora y en cualquier día del año.",
      "Opciones económicas: Cotiza los precios de todos los tipos de viaje, desde los traslados diarios hasta las salidas nocturnas.",
      "Una forma fácil de viajar. Pide un Socio Conductor para que llegue por ti y te lleve a destino con solo tocar un botón.",
    ],
    desc: "Paga tus servicios con tarjeta de crédito o efectivo. ",
    textColor: "gray-primary",
    bgColor: "bg-white",
    image: (
      <StaticImage
        src="../../images/cl/cl-pax-why-didi.jpg"
        alt="conductor didi"
        className="z-10 w-96 m-4 rounded-full"
      ></StaticImage>
    ),
    btnType: "pax",
    btnMode: "primary",
    reverse: "true",
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxWhyDiDi;
