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
  bgImageStyle?: string;
  bgColor?: string;
}

const PaxHero = ({ bgImage, mobileBgImage, bgImageStyle, bgColor }: PaxHeroProps) => {
  // const bgImageStyle = mobileBgImage
  //   ? "hidden !absolute z-0 h-full w-full brightness-90 md:block "
  //   : "!absolute z-0 h-full w-full brightness-90 md:block ";
  const props: CTAProps = {
    hero: true,
    title: t("PaxHero.title"),
    desc: t("PaxHero.desc"),
    textColor: t("PaxHero.textColor"),
    bgImage: bgImage,
    bgColor: bgColor,
    bgImageStyle: bgImageStyle || "hidden !absolute z-0 h-full w-full brightness-90 md:block ",
    mobileBgImage: mobileBgImage,
    mobileBgImageStyle: "!absolute z-0 h-full w-full brightness-90 md:!hidden ",
    btnMode: t("PaxHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxHero;
