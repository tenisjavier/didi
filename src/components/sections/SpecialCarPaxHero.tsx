import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SpecialCarPaxHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const SpecialCarPaxHero = ({ bgImage }: SpecialCarPaxHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("SpecialCarPaxHero.title"),
    desc: t("SpecialCarPaxHero.desc"),
    textColor: t("SpecialCarPaxHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-50 md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default SpecialCarPaxHero;
