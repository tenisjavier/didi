import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection from "../CTASection";

const GuideHero = ({ data }) => {
  const { t } = useTranslation();
  const { title, excerpt, featuredImage } = data.contentfulGuide;
  const image = getImage(featuredImage);

  const props = {
    hero: true,
    title: title,
    desc: excerpt,
    textColor: t("GuideHero.textColor"),
    bgImage: (
      <GatsbyImage
        className="!absolute z-0 h-full w-full md:block"
        image={image}
        alt={title}
      />
    ),

    btnMode: t("GuideHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default GuideHero;
