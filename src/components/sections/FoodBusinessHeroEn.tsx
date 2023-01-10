import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodBusinessHeroProps {
  bgImage: {
    title: string;
    description: string;
    link: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FoodBusinessHeroEn = ({ bgImage }: FoodBusinessHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("FoodBusinessHero.title"),
    desc: t("FoodBusinessHero.desc"),
    textColor: t("FoodBusinessHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-50  md:block",
    btnMode: t("FoodBusinessHero.btnMode"),
    btnType: "foodBusinessEn",
    link: t("FoodBusinessHero.link")
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodBusinessHeroEn;
