import React from "react";
import AccordionNeutralSection from "../AccordionNeutralSection";
import { useTranslation } from "gatsby-plugin-react-i18next";

const GananciasImpuestosFAQ = () => {
  const { t } = useTranslation();
  const data = t("GananciasImpuestosFAQ.items", { returnObjects: true });
  let items = [];
  data.forEach((con, index) => {
    items.push({
      title: con.title,
      content: con.content,
    });
  });

  const title = "Impuestos";
  const desc = "Los impuestos que retiene / traslada la aplicación de manera diaria por obligación fiscal son los siguientes:"

  return (
    <AccordionNeutralSection
      bgColor="bg-white"
      textColor="gray-primary"
      textAccordionColor="orange-primary"
      bgAccordionColor="bg-gray-light"
      title={title}
      desc={desc}
      items={items}
    ></AccordionNeutralSection>
  );
};

export default GananciasImpuestosFAQ;
