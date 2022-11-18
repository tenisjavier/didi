import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface ClubDiDiCTAProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const ClubDiDiCTA = ({ bgImage }: ClubDiDiCTAProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("ClubDiDiCTA.title"),
    desc: t("ClubDiDiCTA.desc"),
    textColor: t("ClubDiDiCTA.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("ClubDiDiCTA.btnMode"),
    btnText: t("ClubDiDiCTA.btnText"),
    btnLink: t("ClubDiDiCTA.btnLink"),
  };
  return <CTASection {...props}></CTASection>;
};

export default ClubDiDiCTA;
