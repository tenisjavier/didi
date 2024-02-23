import React from "react";
import { t } from "../../../../context/countryContext";
import CTASection, { CTAProps } from "../../../CTASection";

interface DiDiCreditLegalHeroProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiCreditLegalHero = ({ bgImage, image }: DiDiCreditLegalHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiCreditLegalHero.title"),
    textColor: t("DiDiCreditLegalHero.textColor"),
    bgColor: t("DiDiCreditLegalHero.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    image: image,
    imageStyle: "!z-10 m-4 w-128",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiCreditLegalHero;
