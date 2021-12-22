import React from "react";
import SectionTemplate from "./SectionTemplate";

const SectionDrvHeader = () => {
  return (
    <SectionTemplate
      title="MANEJA CON DiDi"
      desc="Paga tus servicios con tarjeta de crédito o efectivo. 

      *Tus viajes con tarjeta de crédito se diferirán a 1 sola cuota."
      textColor="gray-primary"
      //bgImage="bg-blue-safety"
      bgColor="white"
      image="woman-phone"
      imageAlt="safety logo"
      imageRounded="full"
      btnType="drv"
      bullets={[
        "Viajes a pedido. Obtén un viaje confiable en minutos, a cualquier hora y en cualquier día del año.",
        "Opciones económicas: Cotiza los precios de todos los tipos de viaje, desde los traslados diarios hasta las salidas nocturnas.",
        "Una forma fácil de viajar. Pide un Socio Conductor para que llegue por ti y te lleve a destino con solo tocar un botón.",
      ]}
      reverse="true"
    ></SectionTemplate>
  );
};

export default SectionDrvHeader;
