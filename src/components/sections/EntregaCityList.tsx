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

const EntregaCityList = ({ data }: ListProps) => {
  const items = data.map((city) => {
    return {
      text: city.name,
      secondText: "",
      link: "#",
      image: city.image,
    };
  });

  const props = {
    title: t("EntregaCityList.title"),
    desc: t("EntregaCityList.desc"),
    bgColor: t("EntregaCityList.bgColor"),
    textColor: t("EntregaCityList.textColor"),
    items: items,
  };
  return <ListSection {...props}></ListSection>;
};

export default EntregaCityList;
