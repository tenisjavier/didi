import React from "react";
import { getImage, ImageDataLike } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
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
  const { title, excerpt, featuredImage } = data.contentfulArticle;
  const image = getImage(featuredImage);
  const bgImage = {
    title: title,
    description: title,
    gatsbyImageData: image,
  };
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: excerpt,
    textColor: t("FoodBlogPostHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-50 md:block",
    btnMode: t("FoodBlogPostHero.btnMode"),
    btnModeSecondary: t("FoodBlogPostHeroSecondary.btnMode"),
    btnType: "bothFood",
  };

  return <CTASection {...props}></CTASection>;
};

export default FoodBlogPostHero;
