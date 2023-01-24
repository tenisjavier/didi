import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

const ContentHeroRTL = () => {
  const props: CTAProps = {
    hero: true,
    title: t("ContentHeroRTL.title"),
    desc: t("ContentHeroRTL.desc"),
    textColor: t("ContentHeroRTL.textColor"),
    bgColor: "bg-orange-primary",
    reverse: false,
    RTL: true
  };
  return <CTASection {...props}></CTASection>;
};

export default ContentHeroRTL;
