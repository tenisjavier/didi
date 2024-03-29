import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyRoadCTAProps {
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

const SafetyRoadCTA = ({ bgImage, image }: SafetyRoadCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("SafetyRoadCTA.title"),
    desc: t("SafetyRoadCTA.desc"),
    textColor: t("SafetyRoadCTA.textColor"),
    bgColor: t("SafetyRoadCTA.bgColor"),
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyRoadCTA;
