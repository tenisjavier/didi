import React from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface GuideHero {
  data: {
    contentfulGuide: {
      title: string;
      excerpt: string;
      featuredImage: ImageDataLike;
    };
  };
}

const GuideHero = ({ data }: GuideHero) => {
  const { title, excerpt, featuredImage } = data.contentfulGuide;
  const image = getImage(featuredImage);

  const props: CTAProps = {
    hero: true,
    title: title,
    desc: excerpt,
    textColor: t("GuideHero.textColor"),
    bgImage: (
      <GatsbyImage
        className="!absolute z-0 h-full w-full md:block brightness-75"
        image={image!}
        alt={title}
      />
    ),

    btnType: "drv",
    btnMode: t("GuideHero.btnMode"),
  };
  return <CTASection {...props}></CTASection>;
};

export default GuideHero;
