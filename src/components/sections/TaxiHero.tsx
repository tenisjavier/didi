import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";
import { ImageDataType } from "../Image";

interface TaxiHeroProps {
  bgImage: ImageDataType;
  mobileBgImage?: ImageDataType;
}

const TaxiHero = ({ bgImage, mobileBgImage }: TaxiHeroProps) => {
  const bgImageStyle = mobileBgImage
    ? "hidden !absolute z-0 h-full w-full md:block brightness-90"
    : "!absolute z-0 h-full w-full md:block ";
  const props: CTAProps = {
    hero: true,
    title: t("TaxiHero.title"),
    desc: t("TaxiHero.desc"),
    textColor: t("TaxiHero.textColor"),
    btnMode: t("TaxiHero.btnMode"),
    btnType: "drv",
    bgImage,
    mobileBgImage,
    bgImageStyle,
    mobileBgImageStyle: "!absolute z-0 h-full w-full md:!hidden brightness-90",
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxiHero;
