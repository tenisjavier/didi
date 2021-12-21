import React from "react";
import SectionTemplate from "./SectionTemplate";

const SectionDrvHeader = () => {
  return (
    <SectionTemplate
      title="MANEJA CON DiDi"
      desc="Conéctate con nuestros servicios de autos particulares o taxi de manera más segura y empieza a generar ingresos extra con DiDi.
      Ahorra para tus vacaciones soñadas, paga la educación de tus hijos o complementa tus ingresos conectándose a la app de movilidad más grande del mundo en tu tiempo libre.
      Regístrate en DiDi con tus datos y los de tu vehículo y comienza a generar ingresos adicionales. Estarás activo entre 24 a 48 horas para que empieces a manejar."
      textColor="gray-primary"
      //bgImage="bg-blue-safety"
      bgColor="white"
      image="driver-window"
      imageAlt="safety logo"
      imageRounded="full"
      btnText="Saber Más"
      btnLink="/seguridad/"
      btnType="drv"
      reverse="true"
    ></SectionTemplate>
  );
};

export default SectionDrvHeader;
