import React from "react";
import { t } from "../../../../context/countryContext";
import { ImageDataType } from "../../../Image";
import CTASection, { CTAProps } from "../../../CTASection";

interface DiDiCreditBeneficiosHeroProps {
  image?: ImageDataType;
}

const DiDiCreditBeneficiosHero = ({ image }: DiDiCreditBeneficiosHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiCreditBeneficiosHero.title"),
    textColor: t("DiDiCreditBeneficiosHero.textColor"),
    bgColor: t("DiDiCreditBeneficiosHero.bgColor"),
    image: image,
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiCreditBeneficiosHero;
