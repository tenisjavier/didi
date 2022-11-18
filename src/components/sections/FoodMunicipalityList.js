import React from "react";
import { t } from "../../context/countryContext";
import ListSection from "../ListSection";

const FoodMunicipalityList = ({ data }) => {
  const items = data.map((city) => {
    return {
      text: city.name,
      secondText: "",
      link: t("municipality.linkItem", { city: city.slug }),
      image: city.image,
    };
  });

  const props = {
    title: t("municipality.title"),
    bgColor: t("municipality.bgColor"),
    textColor: t("municipality.textColor"),
    items: items,
  };
  return <ListSection {...props}></ListSection>;
};

export default FoodMunicipalityList;
