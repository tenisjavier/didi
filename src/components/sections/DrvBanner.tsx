import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const DrvBanner = () => {
  const props: BannerProps = {
    title: t("DrvBanner.title"),
    desc: t("DrvBanner.desc"),
    bgColor: t("DrvBanner.bgColor"),
    textColor: t("DrvBanner.textColor"),
    btnMode: t("DrvBanner.btnMode"),
    btnType: "drv",
  };

  return <Banner {...props}></Banner>;
};

export default DrvBanner;
