import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SimplifyHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const SimplifyHero = ({ bgImage }: SimplifyHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("SimplifyHero.title"),
    desc: t("SimplifyHero.desc"),
    textColor: t("SimplifyHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("SimplifyHero.btnMode"),
    btnLink: t("SimplifyHero.btnLink"),
    btnText: t("SimplifyHero.btnText"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default SimplifyHero;
