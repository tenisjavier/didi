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

const DrivePreventionHero = ({ bgImage }: DrivePreventionHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DrivePreventionHero.title"),
    desc: t("DrivePreventionHero.desc"),
    textColor: t("DrivePreventionHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrivePreventionHero;
