import React from "react";
import { t } from "../../context/countryContext";
import AccordionSection from "../AccordionSection";

const HelpCenterFAQDrvRTL = ({ data }) => {
  let items = [];
  data.faq.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });

  const props = {
    title: t("HelpCenterFAQDrvRTL.title"),
    bgColor: t("HelpCenterFAQDrvRTL.bgColor"),
    textColor: t("HelpCenterFAQDrvRTL.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
    RTL: true
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default HelpCenterFAQDrvRTL;
