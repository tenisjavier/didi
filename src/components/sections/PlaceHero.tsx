import React from "react";
import CTASection from "../CTASection";

interface PlaceProps {
  data: {
    name: string;
    address: string;
    image: {
      title: string;
      description: string;
      gatsbyImageData: any;
    }
  }
}

const PlaceHero = ({ data }: PlaceProps) => {
  const imageData = {
    title: data.address,
    description: data.address,
    gatsbyImageData: data.image,
  };

  return (
    <CTASection
      hero={true}
      title={`Como llegar a ${data.name}`}
      desc={`Dirección: ${data.address}`}
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
