import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyPaxHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const SafetyPaxHero = ({ bgImage }: SafetyPaxHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("SafetyPaxHero.title"),
    desc: t("SafetyPaxHero.desc"),
    textColor: t("SafetyPaxHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("SafetyPaxHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyPaxHero;
