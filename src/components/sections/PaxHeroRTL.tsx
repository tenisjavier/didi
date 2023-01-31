import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PaxHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PaxHeroRTL = ({ bgImage }: PaxHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("PaxHeroRTL.title"),
    desc: t("PaxHeroRTL.desc"),
    textColor: t("PaxHeroRTL.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("PaxHeroRTL.btnMode"),
    btnType: "pax",
    RTL: true
  };
  return <CTASection {...props}></CTASection>;
};

export default PaxHeroRTL;
