import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface TaxiHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const TaxiHero = ({ bgImage }: TaxiHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("TaxiHero.title"),
    desc: t("TaxiHero.desc"),
    textColor: t("TaxiHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-50 md:block"
      ></GatsbyImage>
    ),
    btnMode: t("TaxiHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default TaxiHero;
