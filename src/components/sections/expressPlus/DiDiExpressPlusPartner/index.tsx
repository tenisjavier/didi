import React from "react";
import { t } from "../../../../context/countryContext";
import CTASection, { CTAProps } from "../../../CTASection";

interface DiDiExpressPlusPartnerProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const DiDiExpressPlusPartner = ({ image }: DiDiExpressPlusPartnerProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiExtraPlusPartnerCTA.title"),
    desc: t("DiDiExtraPlusPartnerCTA.desc"),
    textColor: t("DiDiExtraPlusPartnerCTA.textColor"),
    bgColor: t("DiDiExtraPlusPartnerCTA.bgColor"),
    image: image,
    imageStyle: "!z-10 m-4 w-128",
    btnMode: t("DiDiExtraPlusPartnerCTA.btnMode"),
    btnType: "card",
    btnText: t("DiDiExtraPlusPartnerCTA.btnText"),
    reverse: false,
    bullets: t("DiDiExtraPlusPartnerCTA.bullets", { returnObjects: true })
  };
  return (
    <CTASection {...props}></CTASection>
  );
};

export default DiDiExpressPlusPartner;
