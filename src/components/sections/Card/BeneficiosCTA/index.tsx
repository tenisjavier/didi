import React from "react";
import { t } from "../../../../context/countryContext";
import { ImageDataType } from "../../../Image";
import CTAFullSection, { CTAFullSectionProps } from "../../../CTAFullSection";

interface BeneficiosCTAProps {
  image?: ImageDataType;
}

const BeneficiosCTA = ({ image }: BeneficiosCTAProps) => {
  const props: CTAFullSectionProps = {
    colOne: {
      title: t("BeneficiosCTAColOne.title"),
      textColor: t("BeneficiosCTAColOne.textColor"),
      footerLink: {
        text: t("BeneficiosCTAColOne.footerLink.text"),
        link: t("BeneficiosCTAColOne.footerLink.link"),
        textColor: t("BeneficiosCTAColOne.footerLink.textColor"),
      },
    },
    colTwo: {
      title: t("BeneficiosCTAColTwo.title"),
      textColor: t("BeneficiosCTAColOne.textColor"),
      footerLink: {
        text: t("BeneficiosCTAColTwo.footerLink.text"),
        link: t("BeneficiosCTAColTwo.footerLink.link"),
        textColor: t("BeneficiosCTAColTwo.footerLink.textColor"),
      }
    },
    titleSection: t("BeneficiosCTA.sectionTitle"),
    hasDivider: true,
  };
  return <CTAFullSection {...props}></CTAFullSection>;
};

export default BeneficiosCTA;
