import React from "react";
import { t } from "../../context/countryContext";
import slugify from "react-slugify";
import ListSection from "../ListSection";

interface ListProps {
  cities: {
    name: string;
    secondText: string;
    link: string;
    image: any;
    contentful_id: string;
  }[];
}

const CityList = ({ cities }: ListProps) => {
  const items = cities.map((city) => {
    return {
      text: city.name,
      secondText: "",
      link: t("CityList.linkItem", { city: slugify(city.name) }),
      image: city.image,
      contentful_id: city.contentful_id
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
