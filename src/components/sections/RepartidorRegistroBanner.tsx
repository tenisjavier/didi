import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const RepartidorRegistroBanner = () => {
  const props: BannerProps = {
    title: t("RepartidorRegistroBanner.title"),
    desc: t("RepartidorRegistroBanner.desc"),
    descText: t("RepartidorRegistroBanner.descText"),
    bgColor: t("RepartidorRegistroBanner.bgColor"),
    textColor: t("RepartidorRegistroBanner.textColor"),
    btnMode: t("RepartidorRegistroBanner.btnMode"),
    btnText: t("RepartidorRegistroBanner.btnText"),
    btnLink: t("RepartidorRegistroBanner.btnLink"),
  };

  return <Banner {...props}></Banner>;
};

export default RepartidorRegistroBanner;
