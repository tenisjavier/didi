import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const DrvPreventionFeatureBanner = () => {
  const props: BannerProps = {
    title: t("DrvPreventionFeatureBanner.title"),
    desc: t("DrvPreventionFeatureBanner.desc"),
    bgColor: t("DrvPreventionFeatureBanner.bgColor"),
    textColor: t("DrvPreventionFeatureBanner.textColor"),
    btnText: t("DrvPreventionFeatureBanner.btnText"),
    btnLink: t("DrvPreventionFeatureBanner.btnLink"),
    btnMode: t("DrvPreventionFeatureBanner.btnMode"),
  };

  return <Banner {...props}></Banner>;
};

export default DrvPreventionFeatureBanner;
