import React from "react";
import { t } from "../../context/countryContext";
import ListSection, { ListSectionProps } from "../ListSection";

interface ListProps {
  title: string;
  faqs: {
    contentful_id: string;
    title: string;
    slug: string;
  }[];
  city: string;
  link?: string;
  contentful_id?: string;
}

const FaqList = ({ title, faqs, city, link, contentful_id }: ListProps) => {
  const props: ListSectionProps = {
    title: title || t("FaqList.title", { city }),
    desc: t("FaqList.desc"),
    bgColor: t("FaqList.bgColor"),
    textColor: t("FaqList.textColor"),
    contentful_id,
  };

  if (faqs) {
    props.items = faqs.map((faq) => {
      let linkFaq;
      if (link) {
        if (link === "") {
          linkFaq = t("FaqList.linkItem", {
            faqSlug: faq.slug,
          });
        } else {
          linkFaq = link + faq.slug
        }
      } else {
        linkFaq = t("FaqList.linkItem", {
          faqSlug: faq.slug,
        });
      }
      const name = faq.title.length > 50 ? faq.title.slice(0, 50) + "..." : faq.title;
      return {
        text: name,
        link: linkFaq,
        contentful_id: faq.contentful_id,
      };
    });
  }


  return <ListSection {...props}></ListSection>;
};

export default FaqList;
