import React from "react";
import { t } from "../../context/countryContext";
import ListSection from "../ListSection";

interface ListProps {
  data: {
    name: string;
    slug: string;
    image: any;
  }[];
}

const FoodCityList = ({ data }: ListProps) => {
  const items = data.map((city) => {
    return {
      text: city.name,
      secondText: "",
      link: t("FoodCityList.linkItem", { city: city.slug }),
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
