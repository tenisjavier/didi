import React from "react";
import { t } from "../../../../context/countryContext";
import CTASection, { CTAProps } from "../../../CTASection";
import { ImageDataType } from "../../../Image";

interface DiDiExpressPlusHeroProps {
  image?: ImageDataType;
  bgImage?: ImageDataType;
  bgMobile?: ImageDataType;
}

const DiDiExpressPlusHero = ({ bgImage, bgMobile }: DiDiExpressPlusHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiExtraPlusHero.title"),
    desc: t("DiDiExtraPlusHero.desc"),
    textColor: t("DiDiExtraPlusHero.textColor"),
    bgColor: t("DiDiExtraPlusHero.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    mobileBgImage: bgMobile,
    mobileBgImageStyle: "!absolute z-0 h-full w-full md:!hidden",
    mobileTitlePosition: "top",
    imageStyle: "!z-10 m-4 w-128",
    btnMode: t("DiDiExtraPlusHero.btnMode"),
    btnType: "card",
    btnText: t("DiDiExtraPlusHero.btnText"),
    textHighlighterConfig: {
      hasTextHighlighter: true,
      style: "text-white  font-black text-5xl md:text-6xl",
    }
  };
  return (
    <CTASection {...props}></CTASection>
  );
};

export default DiDiExpressPlusHero;
