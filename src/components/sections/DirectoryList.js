import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ListSection from "../ListSection";
import slugify from "react-slugify";

const DirectoryList = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPlace {
        nodes {
          country
          placeId
          name
          address
        }
      }
    }
  `);

  const places = data.allContentfulPlace.nodes;

  let items = [];
  places.forEach((place) => {
    const name = place.name > 30 ? place.name.slice(0, 30) + "..." : place.name;
    items.push({
      text: name,
      secondText: place.address,
      link:
        "/cl/direcciones/como-llegar-a-" +
        slugify(place.name) +
        "_" +
        slugify(place.address),
    });
  });

  const props = {
    title: "Direcciones a Atracciones en Chile",
    desc: "Encontraras detalle de lineas y como irte en distintos medios",
    bgColor: "bg-white",
    textColor: "gray-primary",
    items: items,
  };

  return <ListSection {...props}></ListSection>;
};

export default DirectoryList;
