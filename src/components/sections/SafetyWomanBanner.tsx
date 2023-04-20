import React from "react";
import { t } from "../../context/countryContext";
import Banner, {BannerProps} from "../Banner";

const SafetyWomanBanner = () => {
  const props: BannerProps = {
    title: t("SafetyWomanBanner.title"),
    desc: t("SafetyWomanBanner.desc"),
    bgColor: t("SafetyWomanBanner.bgColor"),
    textColor: t("SafetyWomanBanner.textColor"),
    btnMode: t("SafetyWomanBanner.btnMode"),
    btnLink: t("SafetyWomanBanner.btnLink"),
    btnText: t("SafetyWomanBanner.btnText"),
  };

  return <Banner {...props}></Banner>;
};

export default SafetyWomanBanner;
