import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DrvTaxInfoHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DrvTaxInfoHero = ({ bgImage }: DrvTaxInfoHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DrvTaxInfoHero.title"),
    desc: t("DrvTaxInfoHero.desc"),
    textColor: t("DrvTaxInfoHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("DrvTaxInfoHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default DrvTaxInfoHero;
