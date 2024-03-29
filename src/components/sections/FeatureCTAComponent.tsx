import React from "react";
import CTASection, { CTAProps } from "../CTASection";

interface FeatureCTAComponentProps {
  title: string;
  desc: string;
  btnType?:
    | "both"
    | "drv"
    | "pax"
    | "foodBusiness"
    | "foodDelivery"
    | "foodEater";
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  bullets?: string[];
}

const FeatureCTAComponent = ({
  title,
  desc,
  image,
  bullets
}: FeatureCTAComponentProps) => {
  const props: CTAProps = {
    hero: false,
    title: title,
    desc: desc,
    textColor: "gray-primary",
    image: image,
    imageStyle: "z-10 m-4 w-80  rounded",
    reverse: true,
    bullets: bullets,
    descBeforeBullets: true
  };
  return <CTASection {...props}></CTASection>;
};

export default FeatureCTAComponent;
