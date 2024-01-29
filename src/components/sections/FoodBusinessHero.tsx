import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodBusinessHeroProps {
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

const FoodBusinessHero = ({
  title,
  desc,
  bgImage,
  mobileBgImage,
  mobileTitlePosition,
}: FoodBusinessHeroProps) => {
  const bgImageStyle = mobileBgImage
    ? "hidden !absolute z-0 h-full w-full brightness-90 md:block "
    : "!absolute z-0 h-full w-full brightness-90 md:block ";
  const props: CTAProps = {
    hero: true,
    title: title || t("FoodBusinessHero.title"),
    desc: desc || t("FoodBusinessHero.desc"),
    textColor: t("FoodBusinessHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: bgImageStyle,
    mobileBgImage: mobileBgImage,
    mobileBgImageStyle: "!absolute z-0 h-full w-full brightness-90 md:!hidden ",

    btnMode: t("FoodBusinessHero.btnMode"),
    btnType: "foodBusiness",
    link: t("FoodBusinessHero.link"),
    mobileTitlePosition: mobileTitlePosition,
    contactButtons: {
      phoneNumber: "tel:800-801-6888",
      whatsapp: "https://wa.me/525562705369"
    }
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodBusinessHero;
