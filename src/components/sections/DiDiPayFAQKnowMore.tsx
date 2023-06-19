import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const DiDiPayFAQKnowMoreBanner = () => {
  const props: BannerProps = {
    title: t("DiDiPayFAQKnowMoreBanner.title"),
    desc: t("DiDiPayFAQKnowMoreBanner.desc"),
    bgColor: t("DiDiPayFAQKnowMoreBanner.bgColor"),
    textColor: t("DiDiPayFAQKnowMoreBanner.textColor"),
  };

  return <Banner {...props}></Banner>;
};

export default DiDiPayFAQKnowMoreBanner;
