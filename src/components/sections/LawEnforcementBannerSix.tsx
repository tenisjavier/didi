import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const LawEnforcementBannerSix = () => {
  const props: BannerProps = {
    title: t("LawEnforcementBannerSix.title"),
    desc: t("LawEnforcementBannerSix.desc"),
    descText: t("LawEnforcementBannerSix.descText"),
    bgColor: t("LawEnforcementBannerSix.bgColor"),
    textColor: t("LawEnforcementBannerSix.textColor"),
  };

  return <Banner {...props}></Banner>;
};

export default LawEnforcementBannerSix;
