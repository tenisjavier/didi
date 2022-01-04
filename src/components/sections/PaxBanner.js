import React from "react";
import Banner from "../Banner";

const PaxBanner = () => {
  const banner = {
    title: "¿Quieres ser socio conductor en DiDi?",
    desc: "Genera Dinero y maneja tus tiempos.",
    bgColor: "bg-orange-primary",
    textColor: "white",
    btnMode: "light",
    btnType: "drv",
  };

  return <Banner data={banner}></Banner>;
};

export default PaxBanner;
