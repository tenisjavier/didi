import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const FoodBusinessCTA = ({ image }) => {
  const { t } = useTranslation();
  const props = {
    title: t("FoodBusinessCTA.title"),
    desc: t("FoodBusinessCTA.desc"),
    bgColor: t("FoodBusinessCTA.bgColor"),
    textColor: t("FoodBusinessCTA.textColor"),
    image: (
      <GatsbyImage
        image={getImage(image)}
        alt={image.description}
        className="w-100 z-10 m-4 rounded"
      ></GatsbyImage>
    ),
    btnMode: t("FoodBusinessCTA.btnMode"),
    btnType: "foodBusiness",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodBusinessCTA;
