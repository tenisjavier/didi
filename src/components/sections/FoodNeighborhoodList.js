import React from "react";
import { t } from "../../context/countryContext";
import ListSection from "../ListSection";
const slugify = require("slugify");

const FoodNeighborhoodList = ({ data }) => {
  console.log(data);
  const items = data.map((item) => {
    // console.log(item);
    const neighbourhoodSlug = item.name;
    console.log(typeof(neighbourhoodSlug)+ " " + neighbourhoodSlug);
    const municipalitySlug = item.municipality.name;
    console.log(typeof(municipalitySlug) + " " + municipalitySlug);
    const citySlug = item.municipality.city.name;
    console.log(typeof(citySlug) + " " + citySlug);

    return {
      text: item.name,
      secondText: "",
      link: t("neighborhood.linkItem", {
        neighborhood: slugify(neighbourhoodSlug, { lower: true }),
        municipality: municipalitySlug,
        city: citySlug,
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
