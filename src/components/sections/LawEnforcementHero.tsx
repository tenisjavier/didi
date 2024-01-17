import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrivePreventionHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const LawEnforcementHero = ({ bgImage }: DrivePreventionHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("LawEnforcementHero.title"),
    desc: t("LawEnforcementHero.desc"),
    textColor: t("LawEnforcementHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("LawEnforcementHero.btnMode"),
    btnText: t("LawEnforcementHero.btnText"),
    btnLink: t("LawEnforcementHero.btnLink"),
    reverse: true
  };
  return <CTASection {...props}></CTASection>;
};

export default LawEnforcementHero;
