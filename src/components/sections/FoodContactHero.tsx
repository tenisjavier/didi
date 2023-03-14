import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodContactHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FoodContactHero = ({ bgImage }: FoodContactHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("FoodContactHero.title"),
    desc: t("FoodContactHero.desc"),
    textColor: t("FoodContactHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-50  md:block",
    btnText: t("FoodContactHero.btnText"), 
    btnLink: t("FoodContactHero.btnLink"), 
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodContactHero;
