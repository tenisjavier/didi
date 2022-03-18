import React from "react";
import ListSection from "../ListSection";
import slugify from "react-slugify";

const DirectoryOriginList = ({ data }) => {
  const directions = data.allContentfulDirection.nodes;
  const place = data.contentfulPlace;

  let items = [];
  directions.forEach((dir) => {
    const origin =
      dir.origin.length > 30 ? dir.origin.slice(0, 30) + "..." : dir.origin;

    items.push({
      text: origin + " | " + dir.duration,
      secondText: dir.originAddress,
      link:
        "/cl/lugares/como-llegar-a-" +
        slugify(dir.destination) +
        "-desde-" +
        slugify(dir.origin) +
        "_" +
        slugify(dir.destinationAddress),
    });
  });

  const props = {
    title: `Como llegar a ${place.name} desde distintos puntos de la ciudad`,
    desc: "Encontraras detalle de lineas y como irte en distintos medios",
    bgColor: "bg-white",
    textColor: "gray-primary",
    items: items,
  };

  return <ListSection {...props}></ListSection>;
};

export default DirectoryOriginList;
