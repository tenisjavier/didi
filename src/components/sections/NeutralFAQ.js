import React from "react";
import AccordionNeutralSection from "../AccordionNeutralSection";
import { useTranslation } from "gatsby-plugin-react-i18next";


const NeutralFAQ = () => {
  const { t } = useTranslation();
  const data = t("NeutralFAQ.items", { returnObjects: true });
  let items = [];
  data.forEach((con, index) => {
    items.push({
      title: con.title,
      content: con.content,
    });
  });

  console.log(items);

  const title = "Preguntas frecuentes";
  
  return (
    <AccordionNeutralSection
      bgColor="bg-white"
      textColor="gray-primary"
      textAccordionColor="orange-primary"
      bgAccordionColor="bg-gray-light"
      title={title}
      items={items}
    ></AccordionNeutralSection>
  );
};

export default NeutralFAQ;
