import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface PartnersFoodHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  image?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const PartnersFoodHero = ({ bgImage, image }: PartnersFoodHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("PartnersFoodHero.title"),
    desc: t("PartnersFoodHero.desc"),
    textColor: t("PartnersFoodHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData!}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-75 md:block"
      ></GatsbyImage>
    ),
    ...(image && {
      image: (
        <GatsbyImage
          image={image.gatsbyImageData!}
          alt={image.description}
          className="z-10 m-4 w-100 rounded"
        ></GatsbyImage>
      ),
    }),
    btnMode: t("PartnersFoodHero.btnMode"),
    btnType: t("PartnersFoodHero.btnType"),
  };
  return <CTASection {...props}></CTASection>;
};

export default PartnersFoodHero;
