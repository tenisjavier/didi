import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface StoreHeroProps {
  image?: any;
  title?: string;
  desc?: string;
  textColor?: string;
  bgColor?: string;
}

const StoreHero = ({
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
    imageRawRender: image,
    reverse: true,
    btnMode: "light",
    btnType: "pax",
    btnModeSecondary: "hidden",
  };
  return <CTASection {...props}></CTASection>;
};

export default StoreHero;
