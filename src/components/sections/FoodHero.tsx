import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodHeroProps {
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

const FoodHero = ({
  title,
  desc,
  bgImage,
  mobileBgImage,
  mobileTitlePosition,
}: FoodHeroProps) => {
  const bgImageStyle = mobileBgImage
    ? "hidden !absolute z-0 h-full w-full brightness-90 md:block "
    : "!absolute z-0 h-full w-full brightness-90 md:block ";
  const props: CTAProps = {
    hero: true,
    title: title || t("FoodHero.title"),
    desc: desc || t("FoodHero.desc"),
    textColor: t("FoodHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: bgImageStyle,
    mobileBgImage: mobileBgImage,
    mobileBgImageStyle: "!absolute z-0 h-full w-full brightness-90 md:!hidden ",
    btnMode: t("FoodHero.btnMode"),
    btnType: "foodEater",
    mobileTitlePosition: mobileTitlePosition,
    textHighlighterConfig: {
      hasTextHighlighter: true,
      style: "text-white  font-black text-5xl md:text-6xl",
    },
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodHero;
