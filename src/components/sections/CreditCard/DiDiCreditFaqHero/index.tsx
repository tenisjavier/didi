import React from "react";
import { t } from "../../../../context/countryContext";
import { ImageDataType } from "../../../Image";
import CTASection, { CTAProps } from "../../../CTASection";

interface DiDiCreditFaqHeroProps {
  image?: ImageDataType;
  contentful_id?: string;
}

const DiDiCreditFaqHero = ({ image }: DiDiCreditFaqHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiCreditFaqHero.title"),
    textColor: t("DiDiCreditFaqHero.textColor"),
    bgColor: t("DiDiCreditFaqHero.bgColor"),
    image: image,
    reverse: true,
    whiteRight: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiCreditFaqHero;
