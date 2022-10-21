import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import AccordionSection from "../AccordionSection";

const HelpCenterFAQ = ({ data, isClosed }) => {
  const { t } = useTranslation();
  let items = [];
  data.faq.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });
  const props = {
    title: t("HelpCenterFAQ.title"),
    bgColor: t("HelpCenterFAQ.bgColor"),
    textColor: t("HelpCenterFAQ.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-white",
    items: items,
    isClosed: isClosed,
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default HelpCenterFAQ;
