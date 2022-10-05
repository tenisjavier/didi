import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface PartnersHeroProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const OffersHeroSimple = ({ bgImage }: PartnersHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("OffersHeroSimple.title"),
    desc: t("OffersHeroSimple.desc"),
    textColor: t("OffersHeroSimple.textColor"),
    bgColor: t("OffersHeroSimple.bgColor"),
    ...(bgImage && {
      bgImage: (
        <GatsbyImage
          image={bgImage.gatsbyImageData!}
          alt={bgImage.description}
          className="!absolute z-0 h-full w-full brightness-75 md:block"
        ></GatsbyImage>
      ),
    }),
  };
  return <CTASection {...props}></CTASection>;
};

export default OffersHeroSimple;
