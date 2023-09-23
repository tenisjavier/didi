import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const DiDiCreditBannerBenefits = () => {
  const props: BannerProps = {
    title: t("DiDiCreditBannerBenefits.title"),

    bgColor: t("DiDiCreditBannerBenefits.bgColor"),
    textColor: t("DiDiCreditBannerBenefits.textColor"),

    borderColor: "orange-primary",
  };

  return <Banner {...props}></Banner>;
};

export default DiDiCreditBannerBenefits;
