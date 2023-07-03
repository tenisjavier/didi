import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PaxHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  mobileBgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PaxHero = ({ bgImage, mobileBgImage }: PaxHeroProps) => {
  const bgImageStyle = mobileBgImage
    ? "hidden !absolute z-0 h-full w-full brightness-90 md:block "
    : "!absolute z-0 h-full w-full brightness-90 md:block ";
  const props: CTAProps = {
    hero: true,
    title: t("PaxHero.title"),
    desc: t("PaxHero.desc"),
    textColor: t("PaxHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: bgImageStyle,
    mobileBgImage: mobileBgImage,
    mobileBgImageStyle: "!absolute z-0 h-full w-full brightness-90 md:!hidden ",
    btnMode: t("PaxHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxHero;
