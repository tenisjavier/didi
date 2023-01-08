import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface AboutWomenDrvHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const AboutWomenDrvHero = ({ bgImage }: AboutWomenDrvHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("AboutWomenDrvHero.title"),
    desc: t("AboutWomenDrvHero.desc"),
    textColor: t("AboutWomenDrvHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("AboutWomenDrvHero.btnMode"),
    btnType: "both",
  };
  return <CTASection {...props}></CTASection>;
};

export default AboutWomenDrvHero;
