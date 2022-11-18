import React from "react";
import { t } from "../../context/countryContext";
import Banner from "../Banner";

const PaxBanner = () => {
  const props = {
    title: t("PaxBanner.title"),
    desc: t("PaxBanner.desc"),
    bgColor: t("PaxBanner.bgColor"),
    textColor: t("PaxBanner.textColor"),
    btnMode: t("PaxBanner.btnMode"),
    btnType: "drv",
  };

  return <Banner {...props}></Banner>;
};

export default PaxBanner;
