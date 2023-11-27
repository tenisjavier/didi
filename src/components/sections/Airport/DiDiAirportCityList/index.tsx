import React from "react";
import { t } from "../../../../context/countryContext";
import ListSection from "../../../ListSection";

interface ListProps {
  data: {
    name: string;
    slug: string;
    image: any;
  }[];
}

const DiDiAirportCityList = ({ data }: ListProps) => {
  const items = data.map((city) => {
    return {
      text: city.name,
      secondText: "",
      link: t("DiDiAirportCityList.linkItem", { slug: city.slug }),
      image: city.image,
    };
  });

  const props = {
    title: t("DiDiAirportCityList.title"),
    desc: t("DiDiAirportCityList.desc"),
    bgColor: t("DiDiAirportCityList.bgColor"),
    textColor: t("DiDiAirportCityList.textColor"),
    items: items,
  };
  return <ListSection {...props}></ListSection>;
};

export default DiDiAirportCityList;
