import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface ArticlesHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const ArticlesHero = ({ bgImage }: ArticlesHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("ArticlesHero.title"),
    desc: t("ArticlesHero.desc"),
    textColor: t("ArticlesHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block brightness-75"
      ></GatsbyImage>
    ),
    btnMode: t("ArticlesHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default ArticlesHero;
