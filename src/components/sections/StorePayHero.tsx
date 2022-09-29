import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface StorePayHeroProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  image?: any;
}

const StorePayHero = ({ bgImage, image }: StorePayHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("StorePayHero.title"),
    desc: t("StorePayHero.desc"),
    textColor: t("StorePayHero.textColor"),
    bgColor: t("StorePayHero.bgColor"),
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
      btnMode: t("StorePayHero.btnMode"),
      btnType: "payment",
    }),
  };
  return <CTASection {...props}></CTASection>;
};

export default StorePayHero;