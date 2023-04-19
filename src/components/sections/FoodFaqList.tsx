import React from "react";
import { t } from "../../context/countryContext";
import ListSection from "../ListSection";

interface ListProps {
  title: string;
  faqs: {
    title: string;
    slug: string;
  }[];
  city: string;
  urlPrefix: string;
}

const FoodFaqList = ({ title, faqs, city, urlPrefix }: ListProps) => {
  let items;

  if (faqs !== null) {
    items = faqs.map((faq) => {
      const name = faq.title.length > 50 ? faq.title.slice(0, 50) + "..." : faq.title;
      let link = urlPrefix
        ? urlPrefix + `${faq.slug}/`
        : t("FoodFaqList.linkItem", {
            faqSlug: faq.slug,
          });
      return {
        text: name,
        link: link,
      };
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
