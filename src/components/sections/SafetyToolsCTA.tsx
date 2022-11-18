import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyToolsCTAProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  image?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const SafetyToolsCTA = ({ bgImage, image }: SafetyToolsCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("SafetyToolsCTA.title"),
    desc: t("SafetyToolsCTA.desc"),
    textColor: t("SafetyToolsCTA.textColor"),
    bgColor: t("SafetyToolsCTA.bgColor"),
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyToolsCTA;
