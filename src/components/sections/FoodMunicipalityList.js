import React from "react";
import { t } from "../../context/countryContext";
import ListSection from "../ListSection";
const slugify = require("slugify");

const FoodMunicipalityList = ({ data }) => {
  const itemsList = data.map((municipality) => {
    const municipalitySlug = municipality.name;
    const citySlug = municipality.city.name;
    return {
      text: municipality.name,
      secondText: "",
      link: t("municipality.linkItem", { 
        municipality: slugify(municipalitySlug ,{ lower: true }), 
        city: slugify(citySlug, { lower: true } )
      }),
      image: municipality.image,
    };
  });

  const props = {
    title: t("municipality.title"),
    bgColor: t("municipality.bgColor"),
    textColor: t("municipality.textColor"),
    items: itemsList,
  };
  return <ListSection {...props}></ListSection>;
};

export default FoodMunicipalityList;
