import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ListSection from "../ListSection";

const FoodMunicipalityList = ({ data }) => {
  const { t } = useTranslation();
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
