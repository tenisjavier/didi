import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner, { BannerProps } from "../Banner";

const KnowMoreBanner = () => {
  const { t } = useTranslation();
  const props: BannerProps = {
    title: t("KnowMoreBanner.title"),
    desc: t("KnowMoreBanner.desc"),
    bgColor: t("KnowMoreBanner.bgColor"),
    textColor: t("KnowMoreBanner.textColor"),
    btnText: t("KnowMoreBanner.btnText"),
    btnLink: t("KnowMoreBanner.btnLink"),
    btnMode: t("KnowMoreBanner.btnMode"),
  };

  return <Banner {...props}></Banner>;
};

export default KnowMoreBanner;
