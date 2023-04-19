import React from "react";
import { t } from "../../context/countryContext";
import ListSection, { ListSectionProps } from "../ListSection";

interface ListProps {
  title: string;
  faqs: {
    title: string;
    slug: string;
  }[];
  city: string;
}

const FaqList = ({ title, faqs, city }: ListProps) => {
  const props: ListSectionProps = {
    title: title || t("FaqList.title", { city }),
    desc: t("FaqList.desc"),
    bgColor: t("FaqList.bgColor"),
    textColor: t("FaqList.textColor"),
  };


  if (faqs) {
    props.items = faqs.map((faq) => {
      const name = faq.title.length > 50 ? faq.title.slice(0, 50) + "..." : faq.title;
      return {
        text: name,
        link: t("FaqList.linkItem", {
          faqSlug: faq.slug,
        }),
      };
    });
  }  

  return <ListSection {...props}></ListSection>;
};

export default FaqList;
