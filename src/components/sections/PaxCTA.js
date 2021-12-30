import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const PaxCTA = () => {
  const props = {
    title: "¡Elige DiDi!",
    desc: "La app de movilidad que te conecta con autos particulares y taxis de forma segura para que tengas un viaje increíble. Disfruta de amplia disponibilidad, mayor cobertura, soporte 24/7 y precios bajos en nuestros servicios de Express y DiDi Pasajero y conéctate tu próximo viaje con la app de movilidad en la que recibes más por lo que pagas.",
    textColor: "white",
    bgColor: "bg-orange-primary",
    image: (
      <StaticImage
        src="../../images/cl/woman-phone-car.png"
        alt="conductor didi"
        className="z-10 w-96 m-4 rounded-full"
      ></StaticImage>
    ),
    btnType: "pax",
    btnMode: "light",
    reverse: "true",
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxCTA;
