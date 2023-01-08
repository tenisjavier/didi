import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FaqFoodHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FaqFoodHero = ({ bgImage }: FaqFoodHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("FaqFoodHero.title"),
    desc: t("FaqFoodHero.desc"),
    textColor: t("FaqFoodHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-90 md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default FaqFoodHero;
