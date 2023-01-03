import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import CTASection, { CTAProps } from "../CTASection";

interface PartnerFeatureProps {
  title: string;
  desc: string;
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const PartnerFeature = ({ title, desc, image }: PartnerFeatureProps) => {
  const props: CTAProps = {
    hero: false,
    title: title,
    desc: desc,
    textColor: "gray-primary",
    bgColor: "bg-gray-light",
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded"
      ></GatsbyImage>
    ),
    btnMode: "primary",
    btnType: "drv",
  };

  return <CTASection {...props}></CTASection>;
};

export default PartnerFeature;
