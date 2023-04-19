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

const FoodNeighborhoodList = ({ data }: ListProps ) => {
  const items = data.map((city) => {
    return {
      text: city.name,
      secondText: "",
      link: t("neighborhood.linkItem", {
        city: city.slug.replace(/--|---/g, "-"),
      }),
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
