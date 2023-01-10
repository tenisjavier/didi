import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface CovidCTAProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const CovidCTA = ({ bgImage }: CovidCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("CovidCTA.title"),
    desc: t("CovidCTA.desc"),
    textColor: t("CovidCTA.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
  };
  return <CTASection {...props}></CTASection>;
};

export default CovidCTA;
