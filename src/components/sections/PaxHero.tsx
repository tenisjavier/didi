import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PaxHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PaxHero = ({ bgImage }: PaxHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("PaxHero.title"),
    desc: t("PaxHero.desc"),
    textColor: t("PaxHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("PaxHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxHero;
