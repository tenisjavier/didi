import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import AccordionSection from "../AccordionSection";

const HelpCenterFAQPax = ({ data }) => {
  const { t } = useTranslation();
  let items = [];
  data.faq.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });
  const props = {
    title: t("HelpCenterFAQPax.title"),
    desc: t("HelpCenterFAQPax.desc"),
    bgColor: t("HelpCenterFAQPax.bgColor"),
    textColor: t("HelpCenterFAQPax.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-white",
    items: items,
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default HelpCenterFAQPax;
