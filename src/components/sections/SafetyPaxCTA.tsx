import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyPaxCTAProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  image?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const SafetyPaxCTA = ({ bgImage, image }: SafetyPaxCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("SafetyPaxCTA.title"),
    desc: t("SafetyPaxCTA.desc"),
    textColor: t("SafetyPaxCTA.textColor"),
    bgColor: t("SafetyPaxCTA.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnText: t("SafetyPaxCTA.btnText"),
    btnLink: t("SafetyPaxCTA.btnLink"),
    btnMode: t("SafetyPaxCTA.btnMode"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyPaxCTA;
