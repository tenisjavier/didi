import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface DrvPartnerRegisterCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DrvPartnerRegisterCTA = ({ image }: DrvPartnerRegisterCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("DrvPartnerRegisterCTA.title"),
    desc: t("DrvPartnerRegisterCTA.desc"),
    textColor: t("DrvPartnerRegisterCTA.textColor"),
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvPartnerRegisterCTA;
