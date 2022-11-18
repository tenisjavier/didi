import React from "react";
import { t } from "../../context/countryContext";
import slugify from "react-slugify";
import ListSection from "../ListSection";

const CityList = ({ cities }) => {
  const items = cities.map((city) => {
    return {
      text: city.name,
      secondText: "",
      link: t("CityList.linkItem", { city: slugify(city.name) }),
      image: city.image,
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
