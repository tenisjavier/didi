import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

const BankInfoCTA = () => {
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
