import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const DrvFeatures = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("DrvFeatures.title"),
    bullets: t("DrvFeatures.bullets", { returnObjects: true }),
    textColor: t("DrvFeatures.textColor"),
    bgColor: t("DrvFeatures.bgColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        className="w-100 z-10 m-4"
      ></GatsbyImage>
    ),
    btnMode: t("DrvFeatures.btnMode"),
    btnType: "drv",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvFeatures;
