import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyDrvCTAProps {
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

const SafetyDrvCTA = ({ bgImage, image }: SafetyDrvCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("SafetyDrvCTA.title"),
    desc: t("SafetyDrvCTA.desc"),
    textColor: t("SafetyDrvCTA.textColor"),
    bgColor: t("SafetyDrvCTA.bgColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnText: t("SafetyDrvCTA.btnText"),
    btnLink: t("SafetyDrvCTA.btnLink"),
    btnMode: t("SafetyDrvCTA.btnMode"),
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyDrvCTA;
