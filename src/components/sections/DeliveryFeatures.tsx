import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DeluveryFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DeliveryFeatures = ({ image }: DeluveryFeaturesProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DeliveryFeatures.title"),
    desc: t("DeliveryFeatures.desc"),
    textColor: t("DeliveryFeatures.textColor"),
    bgColor: t("DeliveryFeaturesp.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-80",
    btnMode: t("DeliveryFeatures.btnMode"),
    btnType: "drv",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DeliveryFeatures;
