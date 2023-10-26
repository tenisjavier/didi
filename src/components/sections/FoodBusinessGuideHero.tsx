import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";
import { BtnType } from "../Btn";

interface FoodDeliveryGuideHeroProps {
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
  btnType?: BtnType;
  btnMode?: string;
  isRTL?: boolean;
}

const FoodBusinessGuideHero = ({
  bgImage,
  mobileBgImage,
  btnType,
  btnMode,
  isRTL,
}: FoodDeliveryGuideHeroProps) => {
  const bgImageStyle = mobileBgImage
    ? "hidden !absolute z-0 h-full w-full brightness-90 md:block "
    : "!absolute z-0 h-full w-full brightness-90 md:block ";
  const props: CTAProps = {
    hero: true,
    title: t("FoodBusinessGuideHero.title"),
    // desc: t("FoodBusinessGuideHero.desc"),
    textColor: t("FoodBusinessHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: bgImageStyle,
    mobileBgImage: mobileBgImage,
    mobileBgImageStyle: "!absolute z-0 h-full w-full brightness-90 md:!hidden ",
    // btnMode: btnMode || t("FoodBusinessHero.btnMode"),
    // btnType: btnType || "foodBusiness",
    RTL: isRTL || false,
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodBusinessGuideHero;
