import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyWomanHeroProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const SafetyWomanHero = ({ bgImage, image }: SafetyWomanHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("SafetyWomanHero.title"),
    textColor: t("SafetyWomanHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block "
      ></GatsbyImage>
    ),
    ...(image && {
      image: (
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          className="z-10 m-4 w-80"
        ></GatsbyImage>
      ),
      reverse: true,
    }),
    btnMode: t("SafetyWomanHero.btnMode"),
    btnType: "both",
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyWomanHero;
