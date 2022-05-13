import React from "react";
import CTASection from "../CTASection";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const DrvCityOffice = ({ data }) => {
  const { name, address, openHours, phone, photos } = data;
  let hours = [];
  openHours.forEach((hour) => {
    hours.push(hour);
  });
  const image = getImage(photos[0]);
  const props = {
    title: `Driver Center  ${name}`,
    desc: `Dirección: ${address} ${phone ? "| Teléfono:" + phone : ""}`,
    textColor: "gray-primary",
    bgColor: "bg-gray-light",
    image: (
      <GatsbyImage
        className="z-10 m-4 w-110 rounded"
        image={image}
        alt={name}
      />
    ),
    btnType: "drv",
    btnMode: "primary",
    bullets: hours,
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvCityOffice;
