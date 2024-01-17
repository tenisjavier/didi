import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const LawEnforcementBannerTwo = () => {
  const props: BannerProps = {
    title: t("LawEnforcementBannerThree.title"),
    desc: t("LawEnforcementBannerThree.desc"),
    descText: t("LawEnforcementBannerThree.descText"),
    bgColor: t("LawEnforcementBannerThree.bgColor"),
    textColor: t("LawEnforcementBannerThree.textColor"),
    btnMode: t("LawEnforcementBannerThree.btnMode"),
    btnText: t("LawEnforcementBannerThree.btnText"),
    btnLink: t("LawEnforcementBannerThree.btnLink"),
    btnType: "custom"
  };

  return <Banner {...props}></Banner>;
};

export default LawEnforcementBannerTwo;
