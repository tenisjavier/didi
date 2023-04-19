import React from "react";
import { t } from "../../context/countryContext";
import GuidesListSection, {GuideListSectionProps} from "../GuidesListSection";
import Image from "../Image";

interface GuidesListProps {
  title: string;
  faqs: {
    node: {
      title: string;
      slug: string;
    }
  }[];
  city: string;
  images: {
    title: string;
    description: string;
    gatsbyImageData: any;
  }[];
}

const FoodEducationalGuidesList = ({ title, faqs, city, images }: GuidesListProps) => {
  const props: GuideListSectionProps = {
    title: title || t("FoodEducationalGuidesList.title", { city }),
    desc: t("FoodEducationalGuidesList.desc"),
    bgColor: t("FoodEducationalGuidesList.bgColor"),
    textColor: t("FoodEducationalGuidesList.textColor"),
  };

  if (faqs) {
    props.items = faqs.map((faq, index) => {
      const name =
        faq.node.title.length > 50 ? faq.node.title.slice(0, 50) + "..." : faq.node.title;
      return {
        text: name,
        link: t("FoodEducationalGuidesList.linkItem", {
          faqSlug: faq.node.slug,
        }),
        image: (
          <Image imageData={images[index]} imageStyle="z-10 m-4 max-h-44"></Image>
        ),
      };
    });
  }

  

  return <GuidesListSection {...props}></GuidesListSection>;
};

export default FoodEducationalGuidesList;
