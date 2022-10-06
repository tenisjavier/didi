import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import AccordionSection from "../AccordionSection";

const FoodFAQ = ({ data, title, desc }) => {
  const { t } = useTranslation();
  let items = [];
  data.faq.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });

  const props = {
    title: title || t("FoodFAQ.title"),
    desc: desc || t("FoodFAQ.desc"),
    bgColor: t("FoodFAQ.bgColor"),
    textColor: t("FoodFAQ.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default FoodFAQ;
