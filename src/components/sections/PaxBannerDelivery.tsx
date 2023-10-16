import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const PaxBanner = () => {
  const props: BannerProps = {
    title: t("PaxBanner.title"),
    desc: t("PaxBanner.desc"),
    bgColor: t("PaxBanner.bgColor"),
    textColor: t("PaxBanner.textColor"),
    btnMode: t("PaxBanner.btnMode"),
    btnType: "foodDelivery",
  };

  return <Banner {...props}></Banner>;
};

export default PaxBanner;
