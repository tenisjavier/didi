import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiAmigoHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DiDiAmigoHero = ({ bgImage }: DiDiAmigoHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiAmigoHero.title"),
    desc: t("DiDiAmigoHero.desc"),
    textColor: t("DiDiAmigoHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("DiDiAmigoHero.btnMode"),
    btnText: t("DiDiAmigoHero.btnText"),
    btnLink: t("DiDiAmigoHero.btnLink"),
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiAmigoHero;
