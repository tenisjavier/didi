import React from "react";
import { t } from "../../context/countryContext";
import AccordionSection from "../AccordionSection";

const FaqContent = ({ title, content }) => {
  let items = [
    {
      title: title,
      content: content,
    },
  ];

  const props = {
    title: "",
    desc: "",
    bgColor: t("HelpCenterFAQDrv.bgColor"),
    textColor: t("HelpCenterFAQDrv.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
    type: "faq",
    isClosed: false,
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default FaqContent;
