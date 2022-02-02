import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import slugify from "react-slugify";
import Layout from "../components/Layout";
import PaxHero from "../components/sections/PaxHero";
import ListSection from "../components/ListSection";

const Directory = () => {
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
    items.push({
      text: place.name,
      address: place.address,
      link:
        "/cl/direcciones/como-llegar-a-" +
        slugify(place.name) +
        "_" +
        slugify(place.address),
    });
  });
  console.log(items);
  const props = {
    title: "Direcciones a Atracciones en Chile",
    desc: "Encontraras detalle de lineas y como irte en distintos medios",
    bgColor: "bg-white",
    textColor: "gray-primary",
    maxCols: "2",
    items: items,
  };

  return (
    <Layout>
      <PaxHero></PaxHero>
      <ListSection {...props}></ListSection>
    </Layout>
  );
};

export default Directory;
