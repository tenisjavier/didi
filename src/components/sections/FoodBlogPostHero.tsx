import React from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface FoodBlogPostHeroProps {
  data: {
    contentfulArticle: {
      title: string;
      excerpt: string;
      featuredImage: ImageDataLike;
    };
  };
}

const FoodBlogPostHero = ({ data }: FoodBlogPostHeroProps) => {
  const { t } = useTranslation();
  const { title, excerpt, featuredImage } = data.contentfulArticle;
  const image = getImage(featuredImage);
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: excerpt,
    textColor: t("FoodBlogPostHero.textColor"),
    bgImage: (
      <GatsbyImage
        className="!absolute z-0 h-full w-full brightness-50 md:block"
        image={image!}
        alt={title}
      />
    ),
    btnMode: t("FoodBlogPostHero.btnMode"),
    btnModeSecondary: t("FoodBlogPostHeroSecondary.btnMode"),
    btnType: "bothFood",
  };

  return <CTASection {...props}></CTASection>;
};

export default FoodBlogPostHero;
