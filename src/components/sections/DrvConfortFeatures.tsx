import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvConfortFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DrvConfortFeatures = ({ image }: DrvConfortFeaturesProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DrvConfortFeatures.title"),
    desc: t("DrvConfortFeatures.desc"),
    bullets: t("DrvConfortFeatures.bullets", { returnObjects: true }),
    textColor: t("DrvConfortFeatures.textColor"),
    bgColor: t("DrvConfortFeatures.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100",
    btnMode: t("DrvConfortFeatures.btnMode"),
    btnType: "drv",
    reverse: true,
    centralized: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvConfortFeatures;