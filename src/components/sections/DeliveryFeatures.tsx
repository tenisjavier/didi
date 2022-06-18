import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface DeluveryFeaturesProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DeliveryFeatures = ({ image }: DeluveryFeaturesProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("DeliveryFeatures.title"),
    desc: t("DeliveryFeatures.desc"),
    textColor: t("DeliveryFeatures.textColor"),
    bgColor: t("DeliveryFeaturesp.bgColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-80"
      ></GatsbyImage>
    ),
    btnMode: t("DeliveryFeatures.btnMode"),
    btnType: "drv",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DeliveryFeatures;
