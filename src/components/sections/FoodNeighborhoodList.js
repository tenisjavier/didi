import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ListSection from "../ListSection";

const FoodNeighborhoodList = ({ data }) => {
  const { t } = useTranslation();
  const items = data.map((city) => {
    return {
      text: city.name,
      secondText: "",
      link: t("neighborhood.linkItem", { city: city.slug }),
      image: city.image,
    };
  });

  const props = {
    title: t("neighborhood.title"),
    bgColor: t("neighborhood.bgColor"),
    textColor: t("neighborhood.textColor"),
    items: items,
  };
  return <ListSection {...props}></ListSection>;
};

export default FoodNeighborhoodList;
