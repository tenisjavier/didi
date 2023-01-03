import React from "react";
import { t } from "../../context/countryContext";
import ListSection from "../ListSection";

const FoodFaqList = ({ title, faqs, city, urlPrefix }) => {
  let items = [];
  console.log(urlPrefix);
  if (faqs !== null) {
    faqs.forEach((faq) => {
      const name = faq.title > 50 ? faq.title.slice(0, 50) + "..." : faq.title;
      let link = urlPrefix
        ? urlPrefix + `${faq.slug}/`
        : t("FoodFaqList.linkItem", {
            faqSlug: faq.slug,
          });
      items.push({
        text: name,
        link: link,
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
