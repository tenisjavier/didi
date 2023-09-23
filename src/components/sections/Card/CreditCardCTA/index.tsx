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
      hasIcon: true,
    },
    bullets: {
      bullets: t("CreditCardCTA.bullets", { returnObjects: true }),
      icon: 'faArrowRight',
    }
  }
  const colTwo: ColumType = {
    image: image,
    type: "imageCard",
    imageStyle: "lg:w-full lg:h-full w-11/12",
    containerImageStyle: "w-full h-full lg:mb-0 mb-16"
  }

  const props: CTAFullSectionProps = {
    colOne: colOne,
    colTwo: colTwo,
    bgSection: t('CreditCardCTA.bgSection')
  };
  return <CTAFullSection {...props}></CTAFullSection>;
};

export default CreditCardCTA;
