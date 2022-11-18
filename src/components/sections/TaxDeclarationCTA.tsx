import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

const TaxDeclarationCTA = () => {
  const props: CTAProps = {
    hero: false,
    title: t("TaxDeclarationCTA.title"),
    desc: t("TaxDeclarationCTA.desc"),
    textColor: t("TaxDeclarationCTA.textColor"),
    bgColor: t("TaxDeclarationCTA.bgColor"),
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxDeclarationCTA;
