import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
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
    btnType: "foodEater",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodHero;
