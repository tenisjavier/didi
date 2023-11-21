import React from "react";
import { t } from "../../../../context/countryContext";
import CTASection, { CTAProps } from "../../../CTASection";
import { ImageDataType } from "../../../Image";

interface DiDiAirportHeroProps {
  bgImage?: ImageDataType
  bgImageMobile?: ImageDataType
}

const DiDiAirportHero = ({ bgImage, bgImageMobile }: DiDiAirportHeroProps) => {
  const bgImageStyle = bgImageMobile
    ? "hidden !absolute z-0 h-full w-full brightness-90 md:block "
    : "!absolute z-0 h-full w-full brightness-90 md:block ";

  const props: CTAProps = {
    hero: true,
    title: t("DiDiAirportHero.title"),
    desc: t("DiDiAirportHero.desc"),
    textColor: t("DiDiAirportHero.textColor"),
    bgColor: t("DiDiAirportHero.bgColor"),
    bgImage: bgImage,
    bgImageStyle,
    mobileBgImage: bgImageMobile,
    mobileBgImageStyle: "!absolute z-0 h-full w-full brightness-90 md:!hidden ",
    btnMode: t("DiDiAirportHero.btnMode"),
    btnType: "card",
    btnText: t("DiDiAirportHero.btnText"),
    containerDisabled: true,
    reverse: true,
    alignRight: true,
    mobileTitlePosition: "top"
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiAirportHero;
