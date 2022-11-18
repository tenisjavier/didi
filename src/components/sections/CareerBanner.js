import React from "react";
import { t } from "../../context/countryContext";
import Banner from "../Banner";

const CareerBanner = () => {
  const props = {
    title: t("CareerBanner.title"),
    desc: t("CareerBanner.desc"),
    bgColor: t("CareerBanner.bgColor"),
    textColor: t("CareerBanner.textColor"),
    btnMode: t("CareerBanner.btnMode"),
    btnText: t("CareerBanner.btnText"),
    btnLink: t("CareerBanner.btnLink"),
  };

  return <Banner {...props}></Banner>;
};

export default CareerBanner;
