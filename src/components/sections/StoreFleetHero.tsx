import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface StoreFleetHeroProps {
  image?: any;
}

const StoreFleetHero = ({ image }: StoreFleetHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("StoreFleetHero.title"),
    desc: t("StoreFleetHero.desc"),
    textColor: t("StoreFleetHero.textColor"),
    bgColor: t("StoreFleetHero.bgColor"),
    imageRawRender: image,
    reverse: true,
    btnMode: t("StoreFleetHero.btnMode"),
    btnModeSecondary: "hidden",
    btnType: "fleet",
  };
  return <CTASection {...props}></CTASection>;
};

export default StoreFleetHero;
