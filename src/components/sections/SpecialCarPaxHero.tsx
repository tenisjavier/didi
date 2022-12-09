import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SpecialCarPaxHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const SpecialCarPaxHero = ({ bgImage }: SpecialCarPaxHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("SpecialCarPaxHero.title"),
    desc: t("SpecialCarPaxHero.desc"),
    textColor: t("SpecialCarPaxHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-50 md:block"
      ></GatsbyImage>
    ),
  };
  return <CTASection {...props}></CTASection>;
};

export default SpecialCarPaxHero;
