import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import AccordionSection from "../AccordionSectionRTL";

const HelpCenterFAQDrvRTL = ({ data }) => {
  const { t } = useTranslation();
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
    items: items
  };

  return <AccordionSection {...props}></AccordionSection>;
};

export default HelpCenterFAQDrvRTL;
