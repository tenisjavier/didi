import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodFaqHeroProps {
  title: string;
  desc: string;
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FoodFaqHero = ({ title, desc, bgImage }: FoodFaqHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: desc,
    textColor: t("FoodFaqHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-75 md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodFaqHero;
