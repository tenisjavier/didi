import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import GuidesListSection from "../GuidesListSection";

const FoodEducationalGuidesList = ({ title, faqs, city, image }) => {
  const { t } = useTranslation();
  let items = [];
  if (faqs !== null) {
    faqs.forEach((faq) => {
      const name = faq.node.title > 50 ? faq.node.title.slice(0, 50) + "..." : faq.node.title;
      items.push({
        text: name,
        link: t("FoodEducationalGuidesList.linkItem", {
          faqSlug: faq.node.slug,
        }),
      });
    });
  }

  const props = {
    title: title || t("FoodEducationalGuidesList.title", { city }),
    desc: t("FoodEducationalGuidesList.desc"),
    bgColor: t("FoodEducationalGuidesList.bgColor"),
    textColor: t("FoodEducationalGuidesList.textColor"),
    items: items,
    
  };

  // image: (
  //   <GatsbyImage
  //   image={image}
  //   alt={image.description}
  //   width={700}
  //   height={700}
  //   className="z-10 m-4 max-h-44"
  //   ></GatsbyImage>
  // ),

  return <GuidesListSection {...props}></GuidesListSection>;
};

export default FoodEducationalGuidesList;
