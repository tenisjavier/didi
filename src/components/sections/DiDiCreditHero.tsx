import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiCreditHeroProps {
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

const DiDiCreditHero = ({ bgImage, image }: DiDiCreditHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiCreditHero.title"),
    desc: t("DiDiCreditHero.desc"),
    textColor: t("DiDiCreditHero.textColor"),
    bgColor: t("DiDiCreditHero.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    image: image,
    imageStyle: "!z-10 m-4 w-128",
    btnMode: t("DiDiCreditHero.btnMode"),
    btnType: "card",
    btnText: t("DiDiCreditHero.btnText"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiCreditHero;
