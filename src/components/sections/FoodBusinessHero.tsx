import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodBusinessHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FoodBusinessHero = ({ bgImage }: FoodBusinessHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("FoodBusinessHero.title"),
    desc: t("FoodBusinessHero.desc"),
    textColor: t("FoodBusinessHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-50  md:block",
    btnMode: t("FoodBusinessHero.btnMode"),
    btnType: "foodBusiness",
    link: t("FoodBusinessHero.link"),
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodBusinessHero;
