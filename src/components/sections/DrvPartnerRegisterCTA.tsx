import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvPartnerRegisterCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DrvPartnerRegisterCTA = ({ image }: DrvPartnerRegisterCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("DrvPartnerRegisterCTA.title"),
    desc: t("DrvPartnerRegisterCTA.desc"),
    textColor: t("DrvPartnerRegisterCTA.textColor"),
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvPartnerRegisterCTA;
