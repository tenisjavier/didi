import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface StoreLoanAppHeroProps {
  image?: any;
}

const StoreLoanAppHero = ({ image }: StoreLoanAppHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("StoreLoanAppHero.title"),
    desc: t("StoreLoanAppHero.desc"),
    textColor: t("StoreLoanAppHero.textColor"),
    bgColor: t("StoreLoanAppHero.bgColor"),
    imageRawRender: image,
    reverse: true,
    btnMode: t("StoreLoanAppHero.btnMode"),
    btnModeSecondary: "hidden",
    btnType: "prestamosPax",
  };
  return <CTASection {...props}></CTASection>;
};

export default StoreLoanAppHero;
