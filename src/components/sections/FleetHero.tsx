import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FleetHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FleetHero = ({ bgImage }: FleetHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("FleetHero.title"),
    desc: t("FleetHero.desc"),
    textColor: t("FleetHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-90 md:block",
    btnMode: t("FleetHero.btnMode"),
    btnType: "fleet",
  };
  return <CTASection {...props}></CTASection>;
};

export default FleetHero;
