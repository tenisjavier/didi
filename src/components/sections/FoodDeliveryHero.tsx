import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodDeliveryHeroProps {
  title?: string;
  desc?: string;
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  mobileBgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  mobileTitlePosition?: "top" | "middle";
}

const FoodDeliveryHero = ({
  title,
  desc,
  bgImage,
  mobileBgImage,
  mobileTitlePosition,
}: FoodDeliveryHeroProps) => {
  const bgImageStyle = mobileBgImage
    ? "hidden !absolute z-0 h-full w-full brightness-90 md:block "
    : "!absolute z-0 h-full w-full brightness-90 md:block ";
  const props: CTAProps = {
    hero: true,
    title: title || t("FoodDeliveryHero.title"),
    desc: desc || t("FoodDeliveryHero.desc"),
    textColor: t("FoodDeliveryHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: bgImageStyle,
    mobileBgImage: mobileBgImage,
    mobileBgImageStyle: "!absolute z-0 h-full w-full brightness-90 md:!hidden ",
    btnMode: t("FoodDeliveryHero.btnMode"),
    btnType: "foodDelivery",
    mobileTitlePosition: mobileTitlePosition,
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodDeliveryHero;
