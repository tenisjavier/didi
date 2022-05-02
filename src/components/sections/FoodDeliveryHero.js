import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const FoodDeliveryHero = ({ bgImage }) => {
  const { t } = useTranslation();
  const props = {
    title: t("FoodDeliveryHero.title"),
    desc: t("FoodDeliveryHero.desc"),
    textColor: t("FoodDeliveryHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-50  md:block"
      ></GatsbyImage>
    ),
    btnMode: t("FoodDeliveryHero.btnMode"),
    btnType: "foodDelivery",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodDeliveryHero;
