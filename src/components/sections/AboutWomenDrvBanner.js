import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner from "../Banner";

const AboutWomenDrvBanner = () => {
  const { t } = useTranslation();
  const props = {
    title: t("AboutWomenDrvBanner.title"),
    desc: t("AboutWomenDrvBanner.desc"),
    bgColor: t("AboutWomenDrvBanner.bgColor"),
    textColor: t("AboutWomenDrvBanner.textColor"),
    btnMode: t("AboutWomenDrvBanner.btnMode"),
    btnType: "drv",
  };

  return <Banner {...props}></Banner>;
};

export default AboutWomenDrvBanner;
