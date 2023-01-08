import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const CareerFeatures = ({ image }: DrvFeaturesProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("CareerFeatures.title"),
    bullets: t("CareerFeatures.bullets", { returnObjects: true }),
    textColor: t("CareerFeatures.textColor"),
    bgColor: t("CareerFeatures.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default CareerFeatures;
