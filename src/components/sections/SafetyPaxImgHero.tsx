import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyPaxImgHeroProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const SafetyPaxImgHero = ({ image }: SafetyPaxImgHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("SafetyPaxImgHero.title"),
    desc: t("SafetyPaxImgHero.desc"),
    textColor: t("SafetyPaxImgHero.textColor"),
    bgColor: t("SafetyPaxImgHero.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("SafetyPaxImgHero.btnMode"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyPaxImgHero;
