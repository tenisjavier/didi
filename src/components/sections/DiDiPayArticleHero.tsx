import React from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
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
  const { t } = useTranslation();
  const { title, excerpt, featuredImage } = data.contentfulArticle;
  const image = getImage(featuredImage)!;
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: excerpt,
    textColor: t("DiDiPayArticleHero.textColor"),
    bgImage: (
      <GatsbyImage
        className="!absolute z-0 h-full w-full brightness-75 md:block"
        image={image}
        alt={title}
      />
    ),
    btnMode: t("DiDiPayArticleHero.btnMode"),
    btnType: "payment",
  };

  return <CTASection {...props}></CTASection>;
};

export default DiDiPayArticleHero;
