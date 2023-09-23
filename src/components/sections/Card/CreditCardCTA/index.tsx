import React from "react";
import { t } from "../../../../context/countryContext";
import CTASection, { CTAProps } from "../../../CTASection";
import { ImageDataType } from "../../../Image";
import CTAFullSection, { CTAFullSectionProps, ColumType } from "../../../CTAFullSection";

interface CreditCardCTAProps {
  image?: ImageDataType;
}

const CreditCardCTA = ({ image }: CreditCardCTAProps) => {
  const colOne: ColumType = {
    title: t("CreditCardCTA.title"),
    footerLink: {
      text: t("CreditCardCTA.footerLink.text"),
      link: t("CreditCardCTA.footerLink.link"),
      textColor: t("CreditCardCTA.footerLink.textColor"),
    },
    bullets: {
      bullets: t("CreditCardCTA.bullets", { returnObjects: true }),
    }
  }
  const colTwo: ColumType = {
    image: image,
    type: "imageCard",
    imageStyle: "z-10 w-full h-full",
    containerImageStyle: "w-full h-full"
  }

  const props: CTAFullSectionProps = {
    colOne: colOne,
    colTwo: colTwo,
    bgSection: t('CreditCardCTA.bgSection')
  };
  return <CTAFullSection {...props}></CTAFullSection>;
};

export default CreditCardCTA;
