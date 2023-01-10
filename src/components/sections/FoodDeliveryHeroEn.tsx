import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodDeliveryHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FoodDeliveryHeroEn = ({ bgImage }: FoodDeliveryHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("FoodDeliveryHero.title"),
    desc: t("FoodDeliveryHero.desc"),
    textColor: t("FoodDeliveryHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-50  md:block",
    btnMode: t("FoodDeliveryHero.btnMode"),
    btnType: "foodDeliveryEn",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodDeliveryHeroEn;
