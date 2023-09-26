import React from "react";
import { t } from "../../../../context/countryContext";
import { ImageDataType } from "../../../Image";
import CTASection, { CTAProps } from "../../../CTASection";

interface DiDiCreditBlogHeroProps {
  image?: ImageDataType;
}

const DiDiCreditBlogHero = ({ image }: DiDiCreditBlogHeroProps) => {

  const props: CTAProps = {
    hero: true,
    title: t("DiDiCreditBlogHero.title"),
    textColor: t("DiDiCreditBlogHero.textColor"),
    bgColor: t("DiDiCreditBlogHero.bgColor"),
    image: image,
    reverse: true,
    whiteRight: true,
  };

  return <CTASection {...props}></CTASection>;
};

export default DiDiCreditBlogHero;
