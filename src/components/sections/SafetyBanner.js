import React from "react";
import { t } from "../../context/countryContext";
import Banner from "../Banner";

const SafetyBanner = () => {
  const props = {
    title: t("SafetyBanner.title"),
    desc: t("SafetyBanner.desc"),
    bgColor: t("SafetyBanner.bgColor"),
    textColor: t("SafetyBanner.textColor"),
  };

  return <Banner {...props}></Banner>;
};

export default SafetyBanner;
