import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface AboutHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const AboutHeroRTL = ({ bgImage }: AboutHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("AboutHeroRTL.title"),
    desc: t("AboutHeroRTL.desc"),
    textColor: t("AboutHeroRTL.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("AboutHeroRTL.btnMode"),
    btnType: "both",
    reverse: false,
    RTL: true
  };
  return <CTASection {...props}></CTASection>;
};

export default AboutHeroRTL;
