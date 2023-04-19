import React from "react";
import { t } from "../../context/countryContext";
import Banner, {BannerProps} from "../Banner";

const RestaurantBenefitsBanner = () => {
  const props: BannerProps = {
    title: t("RestaurantBenefitsBanner.title"),
    desc: t("RestaurantBenefitsBanner.desc"),
    bgColor: t("RestaurantBenefitsBanner.bgColor"),
    textColor: t("RestaurantBenefitsBanner.textColor"),
  };

  return <Banner {...props}></Banner>;
};

export default RestaurantBenefitsBanner;
