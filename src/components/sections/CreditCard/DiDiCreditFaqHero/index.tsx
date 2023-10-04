import React from "react";
import { t } from "../../../../context/countryContext";
import { ImageDataType } from "../../../Image";
import CTASection, { CTAProps } from "../../../CTASection";
import { BtnMode, BtnType } from "../../../Btn";

interface DiDiCreditFaqHeroProps {
  image?: ImageDataType;
  title?: string;
  btnType?: BtnType;
  btnMode?: BtnMode;
  btnText?: string;
  bgImage?: ImageDataType;
}

const DiDiCreditFaqHero = ({ image, title, btnMode, btnText, btnType, bgImage }: DiDiCreditFaqHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: title || t("DiDiCreditFaqHero.title"),
    textColor: t("DiDiCreditFaqHero.textColor"),
    bgColor: t("DiDiCreditFaqHero.bgColor"),
    bgImageStyle: "!absolute z-0 h-full w-full brightness-75 md:block",
    image,
    reverse: bgImage ? false : true,
    whiteRight: bgImage ? false : true,
    btnMode,
    btnText,
    btnType,
    bgImage,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiCreditFaqHero;
