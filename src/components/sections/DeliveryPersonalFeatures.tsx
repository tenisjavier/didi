import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DeliveryPersonalFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DeliveryPersonalFeatures = ({ image }: DeliveryPersonalFeaturesProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DeliveryPersonalFeatures.title"),
    desc: t("DeliveryPersonalFeatures.desc"),
    textColor: t("DeliveryPersonalFeatures.textColor"),
    bgColor: t("DeliveryPersonalFeatures.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-80",
    btnMode: t("DeliveryPersonalFeatures.btnMode"),
    btnType: "drv",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DeliveryPersonalFeatures;
