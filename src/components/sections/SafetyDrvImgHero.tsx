import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyDrvImgHeroProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const SafetyDrvImgHero = ({ image }: SafetyDrvImgHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("SafetyDrvImgHero.title"),
    desc: t("SafetyDrvImgHero.desc"),
    textColor: t("SafetyDrvImgHero.textColor"),
    bgColor: t("SafetyDrvImgHero.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("SafetyDrvImgHero.btnMode"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyDrvImgHero;
