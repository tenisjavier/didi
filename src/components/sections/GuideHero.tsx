import React from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface GuideHero {
  data: {
    title: string;
    excerpt: string;
    featuredImage: ImageDataLike;
  };
}

const GuideHero = ({ data }: GuideHero) => {
  const { title, excerpt, featuredImage } = data;
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
    textColor: t("GuideHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block brightness-75",
    btnType: "drv",
    btnMode: t("GuideHero.btnMode"),
  };
  return <CTASection {...props}></CTASection>;
};

export default GuideHero;
