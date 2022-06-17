import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface HomeHeroProps {
  image?: any;
  bgImage: any;
}

const HomeHero = ({ bgImage, image }: HomeHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("HomeHero.title"),
    textColor: t("HomeHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)!}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block "
      ></GatsbyImage>
    ),
    ...(image && {
      image: (
        <GatsbyImage
          image={getImage(image)!}
          alt={image.description}
          className="z-10 m-4 w-80"
        ></GatsbyImage>
      ),
      reverse: true,
    }),
    btnMode: t("HomeHero.btnMode"),
    btnType: "both",
    alignItems: "items-start",
  };
  return <CTASection {...props}></CTASection>;
};

export default HomeHero;
