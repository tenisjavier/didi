import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import slugify from "react-slugify";
import ListSection from "../ListSection";

const CityList = ({ cities }) => {
  const { t } = useTranslation();
  const items = cities.map((city) => {
    return {
      text: city.name,
      secondText: "",
      link: "/cl/lugares/lugares-en-" + slugify(city.name),
    };
  });

  const props = {
    title: t("CityList.title"),
    desc: t("CityList.desc"),
    bgColor: t("CityList.bgColor"),
    textColor: t("CityList.textColor"),
    items: items,
  };
  return <ListSection {...props}></ListSection>;
};

export default CityList;
