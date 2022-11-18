import React from "react";
import { t } from "../../context/countryContext";
import GuidesListSection from "../GuidesListSection";
import { GatsbyImage } from "gatsby-plugin-image";

const FoodEducationalGuidesList = ({ title, faqs, city, images }) => {
  let items = [];
  if (faqs !== null) {
    faqs.forEach((faq, index) => {
      const name =
        faq.node.title > 50
          ? faq.node.title.slice(0, 50) + "..."
          : faq.node.title;
      items.push({
        text: name,
        link: t("FoodEducationalGuidesList.linkItem", {
          faqSlug: faq.node.slug,
        }),
        image: (
          <GatsbyImage
            image={images[index]}
            alt={images[index].description}
            width={700}
            height={700}
            className="z-10 m-4 max-h-44"
          ></GatsbyImage>
        ),
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

  return <GuidesListSection {...props}></GuidesListSection>;
};

export default FoodEducationalGuidesList;
