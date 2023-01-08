import React from "react";
import { getImage, ImageDataLike } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayArticleHeroProps {
  data: {
    contentfulArticle: {
      title: string;
      excerpt: string;
      featuredImage: ImageDataLike;
    };
  };
}

const DiDiPayArticleHero = ({ data }: DiDiPayArticleHeroProps) => {
  const { title, excerpt, featuredImage } = data.contentfulArticle;
  const image = getImage(featuredImage)!;
  const bgImage = {
    title: title,
    description: title,
    gatsbyImageData: image,
  };
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: excerpt,
    textColor: t("DiDiPayArticleHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-75 md:block",
    btnMode: t("DiDiPayArticleHero.btnMode"),
    btnType: "payment",
  };

  return <CTASection {...props}></CTASection>;
};

export default DiDiPayArticleHero;
