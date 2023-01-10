import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const SafetyHero = ({ bgImage }: SafetyHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("SafetyHero.title"),
    desc: t("SafetyHero.desc"),
    textColor: t("SafetyHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("SafetyHero.btnMode"),
    btnType: "both",
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyHero;
