import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodAboutHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FoodAboutHero = ({ bgImage }: FoodAboutHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("FoodAboutHero.title"),
    desc: t("FoodAboutHero.desc"),
    textColor: t("FoodAboutHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-50  md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodAboutHero;
