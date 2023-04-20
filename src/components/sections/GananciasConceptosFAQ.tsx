import React from "react";
import AccordionSection from "../AccordionSection";
import { t } from "../../context/countryContext";

interface FAQProps {
  data: {
    title: string;
    normalText: string;
  }[];
}

const GananciasConceptosFAQ = ({ data }: FAQProps) => {
  data = t("GananciasConceptosFAQ.items", { returnObjects: true });
  let items = data.map((con) => {
    return {
      title: con.title,
      normalText: con.normalText,
    };
  });

  const props = {
    bgColor: "bg-white",
    textColor: "gray-primary",
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    title: "Conoce los conceptos básicos de tus ganancias en DiDi",
    items: items,
    type: "faq",
  };
  return <AccordionSection {...props}></AccordionSection>;
};

export default GananciasConceptosFAQ;
