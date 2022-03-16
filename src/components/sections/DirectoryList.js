import React from "react";
import ListSection from "../ListSection";
import slugify from "react-slugify";

const DirectoryList = ({places, city}) => {

  let items = [];
  if (places !== null) {
    places.forEach((place) => {
    const name = place.name > 30 ? place.name.slice(0, 30) + "..." : place.name;
    items.push({
      text: name,
      secondText: place.address,
      link:
        "/cl/ciudades/como-llegar-a-" +
        slugify(place.name) +
        "_" +
        slugify(place.address),
    });
  });
  }
  

  const props = {
    title: "Direcciones a Atracciones en " + city,
    desc: "Encontraras detalle de lineas y como irte en distintos medios",
    bgColor: "bg-white",
    textColor: "gray-primary",
    items: items,
  };

  return <ListSection {...props}></ListSection>;
};

export default DirectoryList;
