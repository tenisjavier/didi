import React from "react";
import AccordionSection from "../AccordionSection";
import { t } from "../../context/countryContext";

const GananciasImpuestosFAQ = () => {
  const data = t("GananciasImpuestosFAQ.items", { returnObjects: true });
  let items = [];
  data.forEach((con, index) => {
    items.push({
      title: con.title,
      normalText: con.content,
    });
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
