import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface ArticlesHeroProps {
  bgImage: any;
}

const ArticlesHero = ({ bgImage }: ArticlesHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("ArticlesHero.title"),
    desc: t("ArticlesHero.desc"),
    textColor: t("ArticlesHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)!}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("ArticlesHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default ArticlesHero;
