import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface RestaurantHeroImpuestoProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const RestaurantHeroImpuesto = ({ bgImage }: RestaurantHeroImpuestoProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("RestaurantHeroImpuesto.title"),
    desc: t("RestaurantHeroImpuesto.desc"),
    textColor: t("RestaurantHeroImpuesto.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-50  md:block"
      ></GatsbyImage>
    ),
  };
  return <CTASection {...props}></CTASection>;
};

export default RestaurantHeroImpuesto;
