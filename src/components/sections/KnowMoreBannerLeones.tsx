import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner, { BannerProps } from "../Banner";

const KnowMoreBannerLeones = () => {
  const { t } = useTranslation();
  const props: BannerProps = {
    title: t("KnowMoreBannerLeones.title"),
    desc: t("KnowMoreBannerLeones.desc"),
    bgColor: t("KnowMoreBannerLeones.bgColor"),
    textColor: t("KnowMoreBannerLeones.textColor"),
  };

  return <Banner {...props}></Banner>;
};

export default KnowMoreBannerLeones;
