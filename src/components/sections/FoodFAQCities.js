import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import AccordionSection from "../AccordionSection";

const FoodFAQCities = ({ city }) => {
  const { t } = useTranslation();
  const items = [
    {
      title: `¿Cómo pedir comida a domicilio en ${city} con DiDi Food?`,
      normalText: `1. Descarla la app DiDifood aquí \n2. Elige tu comida favorita entre los mas de 500 restaurantes en ${city} que entregan con DiDifood. \n3. Recibe el 50% de descuento en tu primera orden. \n4. Disfruta de tu antojo`,
    },
    {
      title: `¿Cuánto tardará en llegar mi comida con DiDi Food?`,
      normalText: `El tiempo medio de entrega es de 27 minutos. En DiDi Food siempre procesamos tu orden tan rápido como nos es posible. Puedes ver una estimación del tiempo que nos llevará entregar tu comida en la app: Descarla la app DiDifood aquí`,
    },
    {
      title: `¿Qué restaurantes llevan comida domicilio en ${city}`,
      normalText: `En el App de DiDifood encontraras mas de null restaurantes con entrega a domicilio en ${city}`,
    },
    {
      title: `¿Hace DiDi Food entregas de comida en ${city}?`,
      normalText: `Si, Didi Food hace entregas de comida en ${city} y esta disponible en más de 70 ciudades de Mexico. Llevate tu primera orden a mitad de precio!`,
    },
    {
      title: `¿Es seguro pedir comida con DiDi Food?`,
      normalText: `A veces puede ser estresante pedir comida a domicilio. Por lo tanto, nos asegurarnos bien de que tú, tu comida y tus datos estén siempre seguros y protegidos.`,
    },
  ];

  const props = {
    title: t("FoodFAQCities.title"),
    desc: t("FoodFAQCities.desc"),
    bgColor: t("FoodFAQCities.bgColor"),
    textColor: t("FoodFAQCities.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-white",
    items: items,
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default FoodFAQCities;
