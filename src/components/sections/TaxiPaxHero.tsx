import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface TaxiPaxHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const TaxiPaxHero = ({ bgImage }: TaxiPaxHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("TaxiPaxHero.title"),
    desc: t("TaxiPaxHero.desc"),
    textColor: t("TaxiPaxHero.textColor"),
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

export default TaxiPaxHero;
