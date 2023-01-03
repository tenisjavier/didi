import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface BecomeDriverHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const BecomeDriverHero = ({ bgImage }: BecomeDriverHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("BecomeDriverHero.title"),
    desc: t("BecomeDriverHero.desc"),
    textColor: t("BecomeDriverHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-90 md:block"
      ></GatsbyImage>
    ),
  };
  return <CTASection {...props}></CTASection>;
};

export default BecomeDriverHero;
