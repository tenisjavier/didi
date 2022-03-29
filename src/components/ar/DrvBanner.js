import React from "react";
import Banner from "../Banner";

const DrvBanner = () => {
  const banner = {
    title:
      "Tenemos expertos para ayudarte a completar tu registro y responder a cualquier duda que tengás",
    desc: "Conocé todo sobre DiDi.",
    bgColor: "bg-orange-primary",
    textColor: "white",
    btnType: "drv",
    btnMode: "light",
  };

  return <Banner data={banner}></Banner>;
};

export default DrvBanner;
