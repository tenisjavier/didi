import React from "react";
import Banner from "../Banner";

const PlaceWikiBanner = ({ title, desc }) => {
  const banner = {
    title: title,
    desc: desc,
    bgColor: "bg-orange-primary",
    textColor: "white",
    btnType: "drv",
    btnMode: "light",
  };

  return <Banner data={banner}></Banner>;
};

export default PlaceWikiBanner;
