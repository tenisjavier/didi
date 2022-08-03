import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface LeonesHeroProps {
  bgImage: {
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  image?: {
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }
}

const LeonesHero = ({ bgImage, image }: LeonesHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t(""),
    desc: t(""),
    textColor: t(""),
    ...(bgImage && {
      bgImage: (
        <GatsbyImage
          image={bgImage.gatsbyImageData!}
          alt={bgImage.description}
          className="!absolute z-0 h-full w-full md:block"
        ></GatsbyImage>
      ),
    }),
    ...(image && {
      image: (
        <GatsbyImage
          image={image.gatsbyImageData!}
          alt={image.description}
          className="z-10 w-100 mt-10"
        ></GatsbyImage>
      ),
    }),
    btnMode: t(""),
  };
  return <CTASection {...props}></CTASection>;
};

export default LeonesHero;
