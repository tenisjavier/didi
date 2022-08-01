import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
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
    gatsbyImageData: IGatsbyImageData;
  };
}

const FeatureCTAComponent = ({
  title,
  desc,
  btnType,
  image,
}: FeatureCTAComponentProps) => {
  const props: CTAProps = {
    hero: false,
    title: title,
    desc: desc,
    textColor: "gray-primary",
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-80  rounded"
      ></GatsbyImage>
    ),
    btnMode: "primary",
    btnType: btnType,
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default FeatureCTAComponent;
