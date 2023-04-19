import React from "react";
import slugify from "react-slugify";
import { t } from "../../context/countryContext";
import ListSection from "../ListSection";

interface ListProps {
  places: {
    name: string;
    address: string;
  }[];
  city: string;

}

const DirectoryList = ({ places, city }: ListProps) => {
  if(places) {
    const items = places.map((place) => {
      const name = place.name.length > 30 ? place.name.slice(0, 30) + "..." : place.name;
      return {
        text: name,
        secondText: place.address,
        link: t("DirectoryList.linkItem", {
          placeName: slugify(place.name),
          placeAddress: slugify(place.address),
        }),
      };
    });
    

    const props = {
      title: t("DirectoryList.title", { city }),
      desc: t("DirectoryList.desc"),
      bgColor: t("DirectoryList.bgColor"),
      textColor: t("DirectoryList.textColor"),
      items: items,
    };


    return <ListSection {...props}></ListSection>;
  } else {
    return;
  }
};

export default DirectoryList;
