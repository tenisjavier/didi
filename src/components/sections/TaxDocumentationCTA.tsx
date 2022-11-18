import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

const TaxDocumentationCTA = () => {
  const props: CTAProps = {
    hero: false,
    title: t("TaxDocumentationCTA.title"),
    desc: t("TaxDocumentationCTA.desc"),
    textColor: t("TaxDocumentationCTA.textColor"),
    bgColor: t("TaxDocumentationCTA.bgColor"),
    btnMode: t("TaxDocumentationCTA.btnMode"),
    btnText: t("TaxDocumentationCTA.btnText"),
    btnLink: t("TaxDocumentationCTA.btnLink"),
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxDocumentationCTA;
