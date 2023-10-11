import React from "react";
import { t } from "../../context/countryContext";
import Banner, { BannerProps } from "../Banner";

const PaxBanner = () => {
  const props: BannerProps = {
    title: t("FoodBusinessHero.title"),
    desc: t("FoodBusinessHero.desc"),
    bgColor: t("PaxBanner.bgColor"),
    textColor: t("PaxBanner.textColor"),
    btnMode: t("PaxBanner.btnMode"),
    btnType: "foodBusiness",
  };

  return <Banner {...props}></Banner>;
};

export default PaxBanner;
