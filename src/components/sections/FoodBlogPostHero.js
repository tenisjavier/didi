import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const FoodBlogPostHero = ({ data }) => {
  const { t } = useTranslation();
  const { title, excerpt, featuredImage } = data.contentfulArticle;
  const image = getImage(featuredImage);
  const props = {
    hero: true,
    title: title,
    desc: excerpt,
    textColor: t("FoodBlogPostHero.textColor"),
    bgImage: (
      <GatsbyImage
        className="!absolute z-0 h-full w-full brightness-50 md:block"
        image={image}
        alt={title}
      />
    ),
    btnMode: t("FoodBlogPostHero.btnMode"),
    btnType: "foodBusiness",
  };

  return <CTASection {...props}></CTASection>;
};

export default FoodBlogPostHero;
