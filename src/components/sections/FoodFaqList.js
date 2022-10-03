import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ListSection from "../ListSection";

const FoodFaqList = ({ title, faqs, city }) => {
  const { t } = useTranslation();
  let items = [];
  if (faqs !== null) {
    faqs.forEach((faq) => {
      const name = faq.title > 50 ? faq.title.slice(0, 50) + "..." : faq.title;
      items.push({
        text: name,
        link: t("FoodFaqList.linkItem", {
          faqSlug: faq.slug,
        }),
      });
    });
  }

  const props = {
    title: title || t("FoodFaqList.title", { city }),
    desc: t("FoodFaqList.desc"),
    bgColor: t("FoodFaqList.bgColor"),
    textColor: t("FoodFaqList.textColor"),
    items: items,
  };

  return <ListSection {...props}></ListSection>;
};

export default FoodFaqList;
