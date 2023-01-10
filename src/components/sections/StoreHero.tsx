import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface StoreHeroProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  image?: any;
  title?: string;
  desc?: string;
  textColor?: string;
  bgColor?: string;
}

const StoreHero = ({
  bgImage,
  image,
  title,
  desc,
  textColor,
  bgColor,
}: StoreHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: title || t("StoreHero.title"),
    desc: desc || t("StoreHero.desc"),
    textColor: textColor || t("StoreHero.textColor"),
    bgColor: bgColor || t("StoreHero.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    ...(image && {
      image: image,
      reverse: true,
      btnMode: "light",
      btnModeSecondary: "hidden",
      btnType: "pax",
    }),
  };
  return <CTASection {...props}></CTASection>;
};

export default StoreHero;
