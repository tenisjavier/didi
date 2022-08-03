import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import AccordionSection from "../AccordionSection";

const HelpCenterFAQDrv = ({ data }) => {
  const { t } = useTranslation();
  let items = [];
  data.faq.forEach((node) => {
    items.push({
      title: node.title,
      content: node.content,
    });
  });

  const props = {
    title: t("HelpCenterFAQDrv.title"),
    bgColor: t("HelpCenterFAQDrv.bgColor"),
    textColor: t("HelpCenterFAQDrv.textColor"),
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-gray-light",
    items: items,
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default HelpCenterFAQDrv;
