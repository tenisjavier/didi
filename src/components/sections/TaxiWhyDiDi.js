import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const TaxiWhyDidi = () => {
  const props = {
    title:
      "Recibe pedidos a través de la app o recoge a los pasajeros conectando el viaje con DiDi Taxi",
    bullets: [
      "¿Ya está registrado como DiDi Taxista? Ingresa acá y te explicamos cómo se usa la App.",
      "¿Ya hizo viajes como DiDi Taxista? No olvide registrar su cuenta bancaria para recibir su pago. Acá la mostramos cómo.",
      "¿Más dudas? Tenemos expertos listos para ayudarle a completar su registro y responder cualquier duda que tenga. Teléfono: +56 2 29 38 93 02",
    ],
    textColor: "gray-primary",
    image: (
      <StaticImage
        src="../../images/cl/cl-taxi-why-didi.png"
        alt="conductor didi taxi"
        className="w-100 z-10 m-4 rounded-full"
      ></StaticImage>
    ),
    btnType: "drv",
    btnMode: "primary",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxiWhyDidi;
