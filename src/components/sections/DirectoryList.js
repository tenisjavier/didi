import React from "react";
import slugify from "react-slugify";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ListSection from "../ListSection";

const DirectoryList = ({ places, city }) => {
  const { t } = useTranslation();
  let items = [];
  if (places !== null) {
    places.forEach((place) => {
      const name =
        place.name > 30 ? place.name.slice(0, 30) + "..." : place.name;
      items.push({
        text: name,
        secondText: place.address,
        link: t("DirectoryList.linkItem", {
          placeName: slugify(place.name),
          placeAddress: slugify(place.address),
        }),
      });
    });
  }

  const props = {
    title: t("DirectoryList.title", { city }),
    desc: t("DirectoryList.desc"),
    bgColor: t("DirectoryList.bgColor"),
    textColor: t("DirectoryList.textColor"),
    items: items,
  };

  return <ListSection {...props}></ListSection>;
};

export default DirectoryList;
