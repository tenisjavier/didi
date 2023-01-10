import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodDeliveryHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FoodDeliveryHero = ({ bgImage }: FoodDeliveryHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("FoodDeliveryHero.title"),
    desc: t("FoodDeliveryHero.desc"),
    textColor: t("FoodDeliveryHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-50  md:block",
    btnMode: t("FoodDeliveryHero.btnMode"),
    btnType: "foodDelivery",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodDeliveryHero;
