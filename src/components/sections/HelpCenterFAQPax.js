import React from "react";
import { t } from "../../context/countryContext";
import AccordionSection from "../AccordionSection";

const HelpCenterFAQPax = ({ data, isClosed, title }) => {
  let items = [];
  data.faq.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });
  const props = {
    title: title || t("HelpCenterFAQPax.title"),
    desc: t("HelpCenterFAQPax.desc"),
    bgColor: t("HelpCenterFAQPax.bgColor"),
    textColor: t("HelpCenterFAQPax.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-white",
    items: items,
    isClosed: isClosed,
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default HelpCenterFAQPax;
