import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner from "../Banner";

const CareerBanner = () => {
  const { t } = useTranslation();
  const props = {
    title: t("CareerBanner.title"),
    desc: t("CareerBanner.desc"),
    bgColor: t("CareerBanner.bgColor"),
    textColor: t("CareerBanner.textColor"),
    btnMode: t("CareerBanner.btnMode"),
    btnText: t("CareerBanner.btnText"),
    btnLink: t("CareerBanner.btnLink"),
  };

  return <Banner {...props}></Banner>;
};

export default CareerBanner;
