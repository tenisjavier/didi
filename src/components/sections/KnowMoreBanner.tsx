import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const KnowMoreBanner = () => {
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
