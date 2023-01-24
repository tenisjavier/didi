import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface StoreFoodAppHeroProps {
  image?: any;
}

const StoreFoodAppHero = ({ image }: StoreFoodAppHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("StoreFoodAppHero.title"),
    desc: t("StoreFoodAppHero.desc"),
    textColor: t("StoreFoodAppHero.textColor"),
    bgColor: t("StoreFoodAppHero.bgColor"),
    imageRawRender: image,
    reverse: true,
    btnMode: t("StoreFoodAppHero.btnMode"),
    btnModeSecondary: "hidden",
    btnType: "foodEater",
  };
  return <CTASection {...props}></CTASection>;
};

export default StoreFoodAppHero;
