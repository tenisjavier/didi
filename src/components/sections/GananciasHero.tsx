import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface GananciasHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const GananciasHero = ({ bgImage }: GananciasHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("GananciasHero.title"),
    desc: t("GananciasHero.desc"),
    textColor: t("GananciasHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("GananciasHero.btnMode"),
    btnText: t("GananciasHero.btnText"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default GananciasHero;
