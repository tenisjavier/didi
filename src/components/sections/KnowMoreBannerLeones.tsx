import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const KnowMoreBannerLeones = () => {
  const props: BannerProps = {
    title: t("KnowMoreBannerLeones.title"),
    desc: t("KnowMoreBannerLeones.desc"),
    bgColor: t("KnowMoreBannerLeones.bgColor"),
    textColor: t("KnowMoreBannerLeones.textColor"),
  };

  return <Banner {...props}></Banner>;
};

export default KnowMoreBannerLeones;
