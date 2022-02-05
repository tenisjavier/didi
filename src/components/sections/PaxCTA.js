import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const PaxCTA = () => {
  const props = {
    title: "¡Elige DiDi!",
    desc: "La app de movilidad que te conecta con autos particulares y taxis de forma segura para que tengas un viaje increíble. Disfruta de amplia disponibilidad, mayor cobertura, soporte 24/7 y precios bajos en nuestros servicios de Express y DiDi Pasajero y conéctate tu próximo viaje con la app de movilidad en la que recibes más por lo que pagas.",
    textColor: "gray-primary",
    image: (
      <StaticImage
        src="../../images/cl/cl-home-pax-cta.png"
        alt="pasajera didi con celular"
        width={700}
        height={700}
        className="w-100 z-10 m-4 rounded-full"
      ></StaticImage>
    ),
    btnType: "pax",
    btnMode: "dark",
    reverse: "true",
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxCTA;
