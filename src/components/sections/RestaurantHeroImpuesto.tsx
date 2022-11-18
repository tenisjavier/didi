import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface RestaurantHeroImpuestoProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const RestaurantHeroImpuesto = ({ bgImage }: RestaurantHeroImpuestoProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("RestaurantHeroImpuesto.title"),
    desc: t("RestaurantHeroImpuesto.desc"),
    textColor: t("RestaurantHeroImpuesto.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-75  md:block"
      ></GatsbyImage>
    ),
  };
  return <CTASection {...props}></CTASection>;
};

export default RestaurantHeroImpuesto;
