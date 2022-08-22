import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASectionRTL";


const ContentHeroRTL = () => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("ContentHeroRTL.title"),
    desc: t("ContentHeroRTL.desc"),
    textColor: t("ContentHeroRTL.textColor"),
    bgColor: "bg-orange-primary",
    reverse: true
  };
  return <CTASection {...props}></CTASection>;
};

export default ContentHeroRTL;
