import React from "react";
import { t } from "../../context/countryContext";
import Banner, {BannerProps} from "../Banner";

const SafetyBanner = () => {
  const props: BannerProps = {
    title: t("SafetyBanner.title"),
    desc: t("SafetyBanner.desc"),
    bgColor: t("SafetyBanner.bgColor"),
    textColor: t("SafetyBanner.textColor"),
  };

  return <Banner {...props}></Banner>;
};

export default SafetyBanner;
