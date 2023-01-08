import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvPartnerDownloadCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DrvPartnerDownloadCTA = ({ image }: DrvPartnerDownloadCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DrvPartnerDownloadCTA.title"),
    desc: t("DrvPartnerDownloadCTA.desc"),
    textColor: t("DrvPartnerDownloadCTA.textColor"),
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvPartnerDownloadCTA;
