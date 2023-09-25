import React from "react";
import { t } from "../../../../context/countryContext";
import Banner, { BannerProps } from "../../../Banner";
import textHighlighter from "../../../../util/textHighlighter";

const DiDiCreditBannerBenefits = () => {
  const props: BannerProps = {
    title: textHighlighter(t("DiDiCreditBannerBenefits.title")),
    bgColor: t("DiDiCreditBannerBenefits.bgColor"),
    textColor: t("DiDiCreditBannerBenefits.textColor"),
    borderColor: "orange-primary",
  };

  return <Banner {...props}></Banner>;
};

export default DiDiCreditBannerBenefits;
