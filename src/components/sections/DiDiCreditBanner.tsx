import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const DiDiCreditBanner = () => {
  const props: BannerProps = {
    title: t("DiDiCreditBanner.title"),

    bgColor: t("DiDiCreditBanner.bgColor"),
    textColor: t("DiDiCreditBanner.textColor"),

    borderColor: "orange-primary",
  };

  return <Banner {...props}></Banner>;
};

export default DiDiCreditBanner;
