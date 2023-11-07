import React from "react";
import AccordionSection from "../AccordionSection";
import { t } from "../../context/countryContext";

interface FAQProps {
  data: {
    title: string;
    content: string;
  }[];
}

const GananciasImpuestosFAQ = ({ data }: FAQProps) => {
  data = t("GananciasImpuestosFAQ.items", { returnObjects: true });
  let items = data.map((con) => {
    return {
      title: con.title,
      normalText: con.content,
    };
  });

  const props = {
    title: "Impuestos",
    desc: "Los impuestos que retiene / traslada la aplicación de manera diaria por obligación fiscal son los siguientes:",
    bgColor: t("HelpCenterFAQDrv.bgColor"),
    textColor: t("HelpCenterFAQDrv.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
    type: "faq",
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default GananciasImpuestosFAQ;
