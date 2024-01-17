import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const LawEnforcementBannerOne = () => {
  const props: BannerProps = {
    title: t("LawEnforcementBannerOne.title"),
    desc: t("LawEnforcementBannerOne.desc"),
    bgColor: t("LawEnforcementBannerOne.bgColor"),
    textColor: t("LawEnforcementBannerOne.textColor"),
  };

  return <Banner {...props}></Banner>;
};

export default LawEnforcementBannerOne;
