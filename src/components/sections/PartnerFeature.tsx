import React from "react";
import CTASection, { CTAProps } from "../CTASection";

interface PartnerFeatureProps {
  title: string;
  desc: string;
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PartnerFeature = ({ title, desc, image }: PartnerFeatureProps) => {
  const props: CTAProps = {
    hero: false,
    title: title,
    desc: desc,
    textColor: "gray-primary",
    bgColor: "bg-gray-light",
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: "primary",
    btnType: "drv",
  };

  return <CTASection {...props}></CTASection>;
};

export default PartnerFeature;
