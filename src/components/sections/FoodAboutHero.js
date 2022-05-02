import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const FoodAboutHero = ({ bgImage }) => {
  const { t } = useTranslation();
  const props = {
    hero: true,
    title: t("FoodAboutHero.title"),
    desc: t("FoodAboutHero.desc"),
    textColor: t("FoodAboutHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-50  md:block"
      ></GatsbyImage>
    ),
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodAboutHero;
