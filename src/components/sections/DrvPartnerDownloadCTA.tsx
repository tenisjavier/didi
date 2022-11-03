import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface DrvPartnerDownloadCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DrvPartnerDownloadCTA = ({ image }: DrvPartnerDownloadCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("DrvPartnerDownloadCTA.title"),
    desc: t("DrvPartnerDownloadCTA.desc"),
    textColor: t("DrvPartnerDownloadCTA.textColor"),
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvPartnerDownloadCTA;
