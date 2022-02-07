import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CTASection from "../CTASection";

const GuideHero = ({ data }) => {
  const { title, excerpt, featuredImage } = data.contentfulGuide;

  const image = getImage(featuredImage);

  return (
    <CTASection
      title={`${title}`}
      desc={`${excerpt}`}
      textColor="white"
      bgImage={
        <GatsbyImage
          className="!absolute z-0 h-full w-full md:block"
          image={image}
          alt={title}
        />
      }
      btnType="drv"
      btnMode="light"
    ></CTASection>
  );
};

export default GuideHero;
