import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface MujeresDiDiHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const MujeresDiDiHero = ({ bgImage }: MujeresDiDiHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("MujeresDiDiHero.title"),
    desc: t("MujeresDiDiHero.desc"),
    textColor: t("MujeresDiDiHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default MujeresDiDiHero;
