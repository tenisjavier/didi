import React from "react";
import Banner from "../Banner";

const DrvBanner = () => {
  const banner = {
    title:
      "Tenemos expertos para ayudarte a completar tu registro y responder a cualquier duda que tengas",
    desc: "Conoce todo sobre DiDi.",
    bgColor: "bg-orange-primary",
    textColor: "white",
    btnText: "Escíbenos por Whatsapp",
    btnLink: "http://localhost:8000/cl/centro-de-ayuda.",
    btnMode: "light",
  };

  return <Banner data={banner}></Banner>;
};

export default DrvBanner;
