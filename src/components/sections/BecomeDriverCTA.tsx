import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PaxWhyDiDiProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const BecomeDriverCTA = ({ bgImage }: PaxWhyDiDiProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("BecomeDriverCTA.title"),
    bullets: t("BecomeDriverCTA.bullets", { returnObjects: true }),
    desc: t("BecomeDriverCTA.desc"),
    bgColor: t("BecomeDriverCTA.bgColor"),
    textColor: t("BecomeDriverCTA.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("PaxWhyDiDi.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default BecomeDriverCTA;
