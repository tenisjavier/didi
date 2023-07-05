import React from "react";
import { t } from "../../context/countryContext";
import { customSlugify } from "../../util/customSlugify";
import ListSection from "../ListSection";

interface ListProps {
  data: {
    allContentfulDirection: {
      nodes: {
        origin: string;
        duration: string;
        originAddress: string;
        destination: string;
        destinationAddress: string;
      }[];
    };
    contentfulPlace: {
      name: string;
    };
  };
}

const DirectoryOriginList = ({ data }: ListProps) => {
  const directions = data.allContentfulDirection.nodes;
  const place = data.contentfulPlace;

  const items = directions.map((dir) => {
    const origin =
      dir.origin.length > 30 ? dir.origin.slice(0, 30) + "..." : dir.origin;
    return {
      text: origin + " | " + dir.duration,
      secondText: dir.originAddress,
      link: t("DirectoryOriginList.linkItem", {
        origin: customSlugify(dir.origin),
        destination: customSlugify(dir.destination),
        destinationAddress: customSlugify(dir.destinationAddress),
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
