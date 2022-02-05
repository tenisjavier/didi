import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const PlaceHero = ({ data }) => {
  const { name, address } = data;

  const image = getImage(data.image);

  return (
    <CTASection
      title={`Como llegar a ${name}`}
      desc={`Dirección: ${address}`}
      textColor="white"
      bgColor="bg-blue-primary"
      image={
        <GatsbyImage
          className="w-100 lg:w-110 z-10 m-4 rounded"
          image={image}
          alt={name}
        />
      }
      btnType="pax"
      btnMode="light"
    ></CTASection>
  );
};

export default PlaceHero;
