import React from "react";
import SectionTemplate from "./SectionTemplate";

const SectionDrvHeader = () => {
  return (
    <SectionTemplate
      title="EN DIDI, TU SEGURIDAD NO ES UN MITO"
      desc="Revisa todas las funciones de seguridad que tiene nuestra app, antes, durante y después de cada viaje"
      textColor="white"
      image="bg-blue-safety"
      imageAlt="conductor didi"
      btnText="Saber Más"
      btnLink="/seguridad/"
      btnMode="light"
    ></SectionTemplate>
  );
};

export default SectionDrvHeader;
