import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const PaxCTA = () => {
  const props = {
    title: "¡Elegí DiDi!",
    desc: "La app de movilidad que te conecta con autos particulares y taxis de forma segura para que tengás un viaje increíble. Disfrutá de amplia disponibilidad, mayor cobertura, soporte 24/7 y precios bajos en nuestros servicios de Express y DiDi Pasajero y conectate tu próximo viaje con la app de movilidad en la que recibís más por lo que pagás.",
    textColor: "gray-primary",
    image: (
      <StaticImage
        src="../../images/ar/ar-home-pax-cta.jpg"
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
