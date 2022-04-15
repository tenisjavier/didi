import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const ArticleHero = ({ data }) => {
  const { t } = useTranslation();
  const { title, excerpt, featuredImage } = data.contentfulArticle;
  const image = getImage(featuredImage);
  const props = {
    hero: true,
    title: title,
    desc: excerpt,
    textColor: t("ArticleHero.textColor"),
    bgImage: (
      <GatsbyImage
        className="!absolute z-0 h-full w-full brightness-50 md:block"
        image={image}
        alt={title}
      />
    ),
    btnMode: t("ArticleHero.btnMode"),
    btnType: "pax",
  };

  return <CTASection {...props}></CTASection>;
};

export default ArticleHero;
