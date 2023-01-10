import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvFlexFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DrvFlexFeatures = ({ image }: DrvFlexFeaturesProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DrvFlexFeatures.title"),
    bullets: t("DrvFlexFeatures.bullets", { returnObjects: true }),
    textColor: t("DrvFlexFeatures.textColor"),
    bgColor: t("DrvFlexFeatures.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100",
    btnMode: t("DrvFlexFeatures.btnMode"),
    btnType: "drv",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvFlexFeatures;
