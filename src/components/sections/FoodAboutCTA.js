import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const FoodAboutCTA = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("FoodAboutCTA.title"),
    desc: t("FoodAboutCTA.desc"),
    bgColor: t("FoodAboutCTA.bgColor"),
    textColor: t("FoodAboutCTA.textColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        className="w-100 z-10 m-4 h-80 rounded"
      ></GatsbyImage>
    ),

    reverse: "true",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodAboutCTA;
