import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const FoodBusinessHero = ({ bgImage }) => {
  const { t } = useTranslation();
  const props = {
    hero: true,
    title: t("FoodBusinessHero.title"),
    desc: t("FoodBusinessHero.desc"),
    textColor: t("FoodBusinessHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-50  md:block"
      ></GatsbyImage>
    ),
    btnMode: t("FoodBusinessHero.btnMode"),
    btnType: "foodBusiness",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodBusinessHero;
