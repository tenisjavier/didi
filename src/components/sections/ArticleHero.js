import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const ArticleHero = ({ data }) => {
  console.log("article", data);

  const { title, excerpt, featuredImage } = data.contentfulArticle;

  const image = getImage(featuredImage);

  return (
    <CTASection
      title={`${title}`}
      desc={`${excerpt}`}
      textColor="white"
      bgImage={
        <GatsbyImage
          className="!absolute z-0 h-full w-full brightness-50 md:block"
          image={image}
          alt={title}
        />
      }
      btnType="pax"
      btnMode="light"
    ></CTASection>
  );
};

export default ArticleHero;
