import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

const TaxDocumentationCTA = () => {
  const { t } = useTranslation();
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
