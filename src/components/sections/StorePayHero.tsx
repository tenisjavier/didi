import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface StorePayHeroProps {
  image?: any;
}

const StorePayHero = ({ image }: StorePayHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("StorePayHero.title"),
    desc: t("StorePayHero.desc"),
    textColor: t("StorePayHero.textColor"),
    bgColor: t("StorePayHero.bgColor"),
    imageRawRender: image,
    reverse: true,
    btnMode: t("StorePayHero.btnMode"),
    btnModeSecondary: "hidden",
    btnType: "payment",
  };
  return <CTASection {...props}></CTASection>;
};

export default StorePayHero;
