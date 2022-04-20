import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import slugify from "react-slugify";
import ListSection from "../ListSection";

const DirectoryOriginList = ({ data }) => {
  const { t } = useTranslation();
  const directions = data.allContentfulDirection.nodes;
  const place = data.contentfulPlace;

  const items = directions.map((dir) => {
    const origin =
      dir.origin.length > 30 ? dir.origin.slice(0, 30) + "..." : dir.origin;
    return {
      text: origin + " | " + dir.duration,
      secondText: dir.originAddress,
      link: t("DirectoryOriginList.linkItem", {
        origin: slugify(dir.origin),
        destination: slugify(dir.destination),
        destinationAddress: slugify(dir.destinationAddress),
      }),
    };
  });

  const props = {
    title: t("DirectoryOriginList.title", { placeName: place.name }),
    desc: t("DirectoryOriginList.desc"),
    bgColor: t("DirectoryOriginList.bgColor"),
    textColor: t("DirectoryOriginList.textColor"),
    items: items,
  };

  return <ListSection {...props}></ListSection>;
};

export default DirectoryOriginList;
