import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface HelpCenterHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const HelpCenterHeroRTL = ({ bgImage }: HelpCenterHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("HelpCenterHeroRTL.title"),
    desc: t("HelpCenterHeroRTL.desc"),
    textColor: t("HelpCenterHeroRTL.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-75 md:block",
    btnMode: t("HelpCenterHeroRTL.btnMode"),
    btnType: "both",
    reverse: false,
    RTL: true
  };
  return <CTASection {...props}></CTASection>;
};

export default HelpCenterHeroRTL;
