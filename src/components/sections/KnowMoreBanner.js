import React from "react";
import Banner from "../Banner";

const KnowMoreBanner = () => {
  const banner = {
    title: "¿Aún tienes dudas?",
    desc: "Conoce todo sobre DiDi.",
    bgColor: "bg-orange-primary",
    textColor: "white",
    btnText: "Saber Más",
    btnLink: "http://localhost:8000/cl/centro-de-ayuda.",
    btnMode: "light",
  };

  return <Banner data={banner}></Banner>;
};

export default KnowMoreBanner;
