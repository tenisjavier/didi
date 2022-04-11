import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const PartnerFeature = ({ title, desc, image }) => {
  const props = {
    title: title,
    desc: desc,
    textColor: "gray-primary",
    bgColor: "bg-gray-light",
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        className="w-100 z-10 m-4 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: "primary",
    btnType: "drv",
  };

  return <CTASection {...props}></CTASection>;
};

export default PartnerFeature;
