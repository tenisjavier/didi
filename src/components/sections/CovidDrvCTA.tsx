import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface CovidDrvCTAProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const CovidDrvCTA = ({ bgImage }: CovidDrvCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("CovidDrvCTA.title"),
    desc: t("CovidDrvCTA.desc"),
    textColor: t("CovidDrvCTA.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default CovidDrvCTA;
