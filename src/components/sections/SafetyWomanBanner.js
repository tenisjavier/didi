import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner from "../Banner";

const SafetyWomanBanner = () => {
  const { t } = useTranslation();
  const props = {
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
