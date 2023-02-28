import React from "react";
import { t } from "../../context/countryContext";
import AccordionSection from "../AccordionSection";

const HelpCenterFAQFleet = ({ data, isClosed, title }) => {
  let items = [];
  data.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });
  const props = {
    title: title || t("HelpCenterFAQFleet.title"),
    bgColor: t("HelpCenterFAQFleet.bgColor"),
    textColor: t("HelpCenterFAQFleet.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-white",
    items: items,
    isClosed: isClosed,
    type: "faq"
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default HelpCenterFAQFleet;
