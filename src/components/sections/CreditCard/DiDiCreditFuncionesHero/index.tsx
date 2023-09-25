import React from "react";
import { t } from "../../../../context/countryContext";
import { ImageDataType } from "../../../Image";
import CTASection, { CTAProps } from "../../../CTASection";

interface FuncionesHeroProps {
  image?: ImageDataType;
}

const FuncionesHero = ({ image }: FuncionesHeroProps) => {

  const props: CTAProps = {
    hero: true,
    title: t("DiDiCreditFuncionesHero.title"),
    desc: t("DiDiCreditFuncionesHero.desc"),
    textColor: t("DiDiCreditFuncionesHero.textColor"),
    bgColor: t("DiDiCreditFuncionesHero.bgColor"),
    image: image,
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default FuncionesHero;
