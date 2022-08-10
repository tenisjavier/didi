import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface StoreFoodAppHeroProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  image?: any;
}

const StoreFoodAppHero = ({ bgImage, image }: StoreFoodAppHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("StoreFoodAppHero.title"),
    desc: t("StoreFoodAppHero.desc"),
    textColor: t("StoreFoodAppHero.textColor"),
    bgColor: t("StoreFoodAppHero.bgColor"),
    ...(bgImage && {
      bgImage: (
        <GatsbyImage
          image={bgImage.gatsbyImageData}
          alt={bgImage.description}
          className="!absolute z-0 h-full w-full md:block"
        ></GatsbyImage>
      ),
    }),
    ...(image && {
      image: image,
      reverse: true,
      btnMode: t("StoreFoodAppHero.btnMode"),
      btnType: "foodEater",
    }),
  };
  return <CTASection {...props}></CTASection>;
};

export default StoreFoodAppHero;
