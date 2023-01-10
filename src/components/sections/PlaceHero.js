import React from "react";
import { getImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const PlaceHero = ({ data }) => {
  const { name, address } = data;
  const imageData = {
    title: address,
    description: address,
    gatsbyImageData: getImage(data.image),
  };

  return (
    <CTASection
      title={`Como llegar a ${name}`}
      desc={`Dirección: ${address}`}
      textColor="white"
      bgColor="bg-blue-primary"
      image={imageData}
      imageStyle="w-100 z-10 mt-20 max-h-96 rounded"
      btnType="pax"
      btnMode="light"
    ></CTASection>
  );
};

export default PlaceHero;
