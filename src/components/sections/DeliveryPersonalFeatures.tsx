import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface DeliveryPersonalFeaturesProps {
  image: any;
}

const DeliveryPersonalFeatures = ({ image }: DeliveryPersonalFeaturesProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("DeliveryPersonalFeatures.title"),
    desc: t("DeliveryPersonalFeatures.desc"),
    textColor: t("DeliveryPersonalFeatures.textColor"),
    bgColor: t("DeliveryPersonalFeatures.bgColor"),
    image: (
      <GatsbyImage
        image={getImage(image)!}
        alt={image.description}
        className="z-10 m-4 w-80"
      ></GatsbyImage>
    ),
    btnMode: t("DeliveryPersonalFeatures.btnMode"),
    btnType: "drv",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DeliveryPersonalFeatures;
