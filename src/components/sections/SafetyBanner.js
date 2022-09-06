import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner from "../Banner";

const SafetyBanner = () => {
  const { t } = useTranslation();
  const props = {
    title: t("SafetyBanner.title"),
    desc: t("SafetyBanner.desc"),
    bgColor: t("SafetyBanner.bgColor"),
    textColor: t("SafetyBanner.textColor"),
  };

  return <Banner {...props}></Banner>;
};

export default SafetyBanner;
