import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface HelpCenterHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const HelpCenterHero = ({ bgImage }: HelpCenterHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("HelpCenterHero.title"),
    desc: t("HelpCenterHero.desc"),
    textColor: t("HelpCenterHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-75 md:block",
    btnMode: t("HelpCenterHero.btnMode"),
    btnType: "both",
  };
  return <CTASection {...props}></CTASection>;
};

export default HelpCenterHero;
