import React from "react";
import Banner from "../Banner";

const KnowMoreBanner = () => {
  const banner = {
    title: "¿Aún tenés dudas?",
    desc: "Conocé todo sobre DiDi.",
    bgColor: "bg-orange-primary",
    textColor: "white",
    btnText: "Saber Más",
    btnLink: "/cl/centro-de-ayuda",
    btnMode: "light",
  };

  return <Banner data={banner}></Banner>;
};

export default KnowMoreBanner;
