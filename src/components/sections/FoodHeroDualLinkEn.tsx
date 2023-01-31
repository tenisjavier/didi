import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FoodHero = ({ bgImage }: FoodHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("FoodHero.title"),
    desc: t("FoodHero.desc"),
    textColor: t("FoodHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-50  md:block",
    btnMode: t("FoodHero.btnMode"),
    btnModeSecondary: t("FoodHeroSecondary.btnMode"),
    btnType: "bothFoodEn",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodHero;