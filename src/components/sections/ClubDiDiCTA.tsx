import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface ClubDiDiCTAProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const ClubDiDiCTA = ({ bgImage }: ClubDiDiCTAProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("ClubDiDiCTA.title"),
    desc: t("ClubDiDiCTA.desc"),
    textColor: t("ClubDiDiCTA.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    btnMode: t("ClubDiDiCTA.btnMode"),
    btnText: t("ClubDiDiCTA.btnText"),
    btnLink: t("ClubDiDiCTA.btnLink"),
  };
  return <CTASection {...props}></CTASection>;
};

export default ClubDiDiCTA;
