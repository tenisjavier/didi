import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Banner from "../Banner";

const RestaurantBenefitsBanner = () => {
  const { t } = useTranslation();
  const props = {
    title: t("RestaurantBenefitsBanner.title"),
    desc: t("RestaurantBenefitsBanner.desc"),
    bgColor: t("RestaurantBenefitsBanner.bgColor"),
    textColor: t("RestaurantBenefitsBanner.textColor"),
  };

  return <Banner {...props}></Banner>;
};

export default RestaurantBenefitsBanner;
