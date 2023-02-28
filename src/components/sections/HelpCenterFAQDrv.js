import React from "react";
import { t } from "../../context/countryContext";
import AccordionSection from "../AccordionSection";

const HelpCenterFAQDrv = ({ data }) => {
  let items = [];
  data.faq.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });

  const props = {
    title: t("HelpCenterFAQDrv.title"),
    desc: t("HelpCenterFAQDrv.desc"),
    bgColor: t("HelpCenterFAQDrv.bgColor"),
    textColor: t("HelpCenterFAQDrv.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
    type: "faq",
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default HelpCenterFAQDrv;
