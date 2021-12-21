import React from "react";
import SectionTemplate from "./SectionTemplate";

const SectionDrvHeader = () => {
  return (
    <SectionTemplate
      title="EN DIDI, TU SEGURIDAD NO ES UN MITO"
      desc="Revisa todas las funciones de seguridad que tiene nuestra app, antes, durante y después de cada viaje"
      textColor="white"
      //bgImage="bg-blue-safety"
      bgColor="bg-sky-500"
      image="funciones-de-seguridad-logo"
      imageAlt="safety logo"
      btnText="Saber Más"
      btnLink="/seguridad/"
      btnMode="light"
      reverse="true"
    ></SectionTemplate>
  );
};

export default SectionDrvHeader;
