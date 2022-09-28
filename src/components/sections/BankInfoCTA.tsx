import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

const BankInfoCTA = () => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("BankInfoCTA.title"),
    desc: t("BankInfoCTA.desc"),
    textColor: t("BankInfoCTA.textColor"),
    bgColor: t("BankInfoCTA.bgColor"),
  };
  return <CTASection {...props}></CTASection>;
};

export default BankInfoCTA;
