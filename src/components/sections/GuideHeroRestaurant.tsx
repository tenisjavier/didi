import React from "react";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface GuideHero {
  data: {
    title: string;
    excerpt: string;
    featuredImage: ImageDataLike;
    featuredImageMobile: ImageDataLike;
    btnCustomLink?: string;
    btnCustomText?: string;
  };
}

const GuideHero = ({ data }: GuideHero) => {
  const {
    title,
    excerpt,
    featuredImage,
    featuredImageMobile,
    btnCustomText,
    btnCustomLink,
  } = data;
  const image = getImage(featuredImage);
  const imageMobile = getImage(featuredImageMobile);
  const bgImage = {
    title: title,
    description: title,
    gatsbyImageData: image,
  };
  const mobileBgImage = {
    title: title,
    description: title,
    gatsbyImageData: imageMobile,
  };
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: excerpt,
    textColor: t("GuideHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block brightness-75",
    mobileBgImage: mobileBgImage,
    mobileBgImageStyle: "!absolute z-0 h-full w-full brightness-90 md:!hidden ",
    btnType: "foodBusiness",
    btnMode: t("GuideHero.btnMode"),
    ...(btnCustomText && { btnText: btnCustomText }),
    ...(btnCustomLink && { btnLink: btnCustomLink }),
  };
  console.log(props);
  return <CTASection {...props}></CTASection>;
};

export default GuideHero;
