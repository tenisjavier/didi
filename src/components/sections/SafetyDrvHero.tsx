import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyDrvHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const SafetyDrvHero = ({ bgImage }: SafetyDrvHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("SafetyDrvHero.title"),
    desc: t("SafetyDrvHero.desc"),
    textColor: t("SafetyDrvHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("SafetyDrvHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyDrvHero;
