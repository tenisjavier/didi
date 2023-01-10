import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodSafetyHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FoodSafetyHero = ({ bgImage }: FoodSafetyHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("FoodSafetyHero.title"),
    desc: t("FoodSafetyHero.desc"),
    textColor: t("FoodSafetyHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodSafetyHero;
