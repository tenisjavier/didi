import React from "react";
import Banner from "../Banner";

const PaxBanner = () => {
  const banner = {
    title: "¿Querés ser socio conductor en DiDi?",
    desc: "Generá Dinero y maneja tus tiempos.",
    bgColor: "bg-orange-primary",
    textColor: "white",
    btnMode: "light",
    btnType: "drv",
  };

  return <Banner data={banner}></Banner>;
};

export default PaxBanner;
