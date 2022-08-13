import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ListSection from "../ListSection";

const FaqList = ({ title, faqs, city }) => {
  const { t } = useTranslation();
  let items = [];
  if (faqs !== null) {
    faqs.forEach((faq) => {
      const name = faq.title > 50 ? faq.title.slice(0, 50) + "..." : faq.title;
      items.push({
        text: name,
        link: t("FaqList.linkItem", {
          faqSlug: faq.slug,
        }),
      });
    });
  }

  const props = {
    title: title || t("FaqList.title", { city }),
    desc: t("FaqList.desc"),
    bgColor: t("FaqList.bgColor"),
    textColor: t("FaqList.textColor"),
    items: items,
  };

  return <ListSection {...props}></ListSection>;
};

export default FaqList;
