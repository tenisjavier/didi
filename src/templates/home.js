import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Layout from "../components/Layout";
import DrvCTA from "../components/sections/DrvCTA";
import SliderSection2 from "../components/SliderSection2";

const HomeTemplate = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulGuide {
        nodes {
          title
          content {
            raw
          }
        }
      }
    }
  `);
  console.log(data.allContentfulGuide.nodes[0].content.raw);
  const title = "Tipos de DiDi";
  const bgColor = "bg-white";
  const textColor = "gray-primary";
  const items = [
    {
      title: "DiDi Taxi",
      desc: "Recibe pedidos de servicios a través de la app o recoge a los pasajeros en la calle y conecta el viaje a través de DiDi Taxi",
      textColor: "gray-primary",
      image: <StaticImage src="../images/taxi-car.jpg"></StaticImage>,
      btnText: "Saber Más",
      btnLink: "Con DiDi puedes viajar pagando menos.",
      btnMode: "light",
      bgColor: "bg-white",
    },
    {
      title: "DiDi Express",
      desc: "Vehículos particulares de 4 puertas y modelo 2009 en adelante con A/C y airbags. ¿Tienes uno? Express es para ti.",
      textColor: "gray-primary",
      image: <StaticImage src="../images/didi-fleet.png"></StaticImage>,
      btnText: "Saber Más",
      btnLink: "Con DiDi puedes viajar pagando menos.",
      btnMode: "light",
      bgColor: "bg-white",
    },
    {
      title: "DiDi Fleet",
      desc: "DiDi Fleet Es la App de socio de flotilla que te permite generar ingresos a través de la integración de nuevos socios conductores en tu flota de carros. Con la app, podrás contactar nuevos conductores y hacer un seguimiento de ellos",
      textColor: "gray-primary",
      image: <StaticImage src="../images/car2.jpg"></StaticImage>,
      btnText: "Saber Más",
      btnLink: "Con DiDi puedes viajar pagando menos.",
      btnMode: "light",
      bgColor: "bg-white",
    },
  ];
  return (
    <Layout>
      <DrvCTA></DrvCTA>

      <SliderSection2
        bgColor={bgColor}
        textColor={textColor}
        title={title}
        items={items}
      ></SliderSection2>
      <div>{renderRichText(data.allContentfulGuide.nodes[0].content)}</div>
    </Layout>
  );
};

export default HomeTemplate;
