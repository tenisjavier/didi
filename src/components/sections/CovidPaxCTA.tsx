import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface CovidPaxCTAProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const CovidPaxCTA = ({ bgImage }: CovidPaxCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("CovidPaxCTA.title"),
    desc: t("CovidPaxCTA.desc"),
    textColor: t("CovidPaxCTA.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default CovidPaxCTA;
