import React from "react";
import { getImage, ImageDataLike } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface GuideHero {
  data: {
    title: string;
    excerpt: string;
    featuredImage: ImageDataLike;
  };
}

const RepartidorHero = ({ data }: GuideHero) => {
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
    btnType: "foodDelivery",
    btnMode: t("RepartidorHero.btnMode"),
  };
  return <CTASection {...props}></CTASection>;
};

export default RepartidorHero;
