import React from "react";
import { t } from "../../context/countryContext";
import Banner, {BannerProps} from "../Banner";

const AboutWomenDrvBanner = () => {
  const props: BannerProps = {
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
