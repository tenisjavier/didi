import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const LawEnforcementBannerTwo = () => {
  const props: BannerProps = {
    title: t("LawEnforcementBannerTwo.title"),
    desc: t("LawEnforcementBannerTwo.desc"),
    descText: t("LawEnforcementBannerTwo.descText"),
    bgColor: t("LawEnforcementBannerTwo.bgColor"),
    textColor: t("LawEnforcementBannerTwo.textColor"),
  };

  return <Banner {...props}></Banner>;
};

export default LawEnforcementBannerTwo;
