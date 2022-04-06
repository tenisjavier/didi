import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ListSection from "../ListSection";
import slugify from "react-slugify";

const DrvCityList = ({ data }) => {
  const { t } = useTranslation();
  const items = data.map((city) => {
    return {
      text: city.name,
      secondText: "",
      link: t("DrvCityList.itemLink") + slugify(city.name) + "/",
    };
  });

  const props = {
    title: t("DrvCityList.title"),
    desc: t("DrvCityList.desc"),
    bgColor: t("DrvCityList.bgColor"),
    textColor: t("DrvCityList.textColor"),
    items: items,
  };
  return <ListSection {...props}></ListSection>;
};

export default DrvCityList;
