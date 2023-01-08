import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvTaxInfoFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DrvTaxInfoFeatures = ({ image }: DrvTaxInfoFeaturesProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DrvTaxInfoFeatures.title"),
    bullets: t("DrvTaxInfoFeatures.bullets", { returnObjects: true }),
    textColor: t("DrvTaxInfoFeatures.textColor"),
    bgColor: t("DrvTaxInfoFeatures.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100",
    btnMode: t("DrvTaxInfoFeatures.btnMode"),
    btnType: "drv",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvTaxInfoFeatures;
