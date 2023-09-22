import React from "react";
import { t } from "../../../../context/countryContext";
import CTAFullSection, { CTAFullSectionProps, ColumType } from "../../../CTAFullSection";

interface CashBackCTAProps { }

const CashBackCTA = ({ }: CashBackCTAProps) => {
  console.log("image", t("CashBack.bgColor"));
  const colOne: ColumType = {
    title: t("CashBack.title"),
    subTitle: t("CashBack.subTitle"),
    desc: t("CashBack.desc"),
    bgColorCard: t("CashBack.bgColor"),
    textColor: t("CashBack.textColor"),
  }

  const colTwo: ColumType = {
    bullets: {
      creditCardBullets: t("CashBack.bullets", { returnObjects: true }),
    },
    footerLink: {
      link: t("CashBack.footerLink.link"),
      text: t("CashBack.footerLink.text"),
      textColor: t("CashBack.footerLink.textColor"),
    },
  }

  const props: CTAFullSectionProps = {
    colOne: colOne,
    colTwo: colTwo,
  };
  return <CTAFullSection {...props}></CTAFullSection>;
};

export default CashBackCTA;