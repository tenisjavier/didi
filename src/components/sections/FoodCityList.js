import React from "react";
import { t } from "../../context/countryContext";
import ListSection from "../ListSection";
const slugify = require("slugify");

const FoodCityList = ({ data }) => {
  const items = data.map((city) => {
    return {
      text: city.name,
      secondText: "",
      link: t("FoodCityList.linkItem", { city: slugify(city.name, { lower: true }) }),
      image: city.image,
    };
  });

  const props = {
    title: t("FoodCityList.title"),
    bgColor: t("FoodCityList.bgColor"),
    textColor: t("FoodCityList.textColor"),
    items: items,
  };
  return <ListSection {...props}></ListSection>;
};

export default FoodCityList;
