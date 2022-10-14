import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface RestaurantHeroRegistroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const RestaurantHeroRegistro = ({ bgImage }: RestaurantHeroRegistroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("RestaurantHeroRegistro.title"),
    desc: t("RestaurantHeroRegistro.desc"),
    textColor: t("RestaurantHeroRegistro.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-90  md:block"
      ></GatsbyImage>
    ),
  };
  return <CTASection {...props}></CTASection>;
};

export default RestaurantHeroRegistro;
