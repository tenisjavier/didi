import React from "react";
import { t } from "../../context/countryContext";
import ListSection from "../ListSection";
const slugify = require("slugify");

const FoodNeighborhoodList = ({ data }) => {
  console.log(data);
  const items = data.map((item) => {
    const neighbourhoodSlug = item.name;
    const municipalitySlug = item.municipality.name;
    const citySlug = item.city.name;

    return {
      text: item.name,
      secondText: "",
      link: t("neighborhood.linkItem", {
        neighborhood: slugify(neighbourhoodSlug, { lower: true }),
        municipality: slugify(municipalitySlug, { lower: true }),
        city: slugify(citySlug, { lower: true }),
      }),
      image: item.image,
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
