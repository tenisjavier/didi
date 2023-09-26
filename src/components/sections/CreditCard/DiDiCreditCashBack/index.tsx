import React from "react";
import { t } from "../../../../context/countryContext";
import CTAFullSection, { CTAFullSectionProps, ColumType } from "../../../CTAFullSection";

interface DiDiCreditCashBackProps { }

const DiDiCreditCashBack = ({ }: DiDiCreditCashBackProps) => {

  const colOne: ColumType = {
    title: t("DiDiCreditCashBack.title"),
    subTitle: t("DiDiCreditCashBack.subTitle"),
    desc: t("DiDiCreditCashBack.desc"),
    bgColorCard: t("DiDiCreditCashBackColOne.bgColor"),
    textColor: t("DiDiCreditCashBack.textColor"),
    hasIconInTitle: true,
    textHighlighterStyle: "block text-white"
  }

  const colTwo: ColumType = {
    bullets: {
      creditCardCashBackBullets: t("DiDiCreditCashBack.bullets", { returnObjects: true }),
    },
  }

  const props: CTAFullSectionProps = {
    colOne,
    colTwo,
  }

  return <CTAFullSection {...props}></CTAFullSection>;
};

export default DiDiCreditCashBack;