import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const RepartidorBanner = () => {
  const props: BannerProps = {
    title: t("RepartidorBanner.title"),
    desc: t("RepartidorBanner.desc"),
    descText: t("RepartidorBanner.descText"),
    bgColor: t("RepartidorBanner.bgColor"),
    textColor: t("RepartidorBanner.textColor"),
    btnMode: t("RepartidorBanner.btnMode"),
    btnText: t("RepartidorBanner.btnText"),
    btnLink: t("RepartidorBanner.btnLink"),
  };

  return <Banner {...props}></Banner>;
};

export default RepartidorBanner;
