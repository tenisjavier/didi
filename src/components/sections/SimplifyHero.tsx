import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface SimplifyHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const SimplifyHero = ({ bgImage}: SimplifyHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("SimplifyHero.title"),
    desc: t("SimplifyHero.desc"),
    textColor: t("SimplifyHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData!}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("SimplifyHero.btnMode"),
    btnLink: t("SimplifyHero.btnLink"),
    btnText: t("SimplifyHero.btnText"),
    reverse: true
  };
  return <CTASection {...props}></CTASection>;
};

export default SimplifyHero;
