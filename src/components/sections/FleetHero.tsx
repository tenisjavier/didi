import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FleetHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FleetHero = ({ bgImage }: FleetHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("FleetHero.title"),
    desc: t("FleetHero.desc"),
    textColor: t("FleetHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-90 md:block"
      ></GatsbyImage>
    ),
    btnMode: t("FleetHero.btnMode"),
    btnType: "fleet",
  };
  return <CTASection {...props}></CTASection>;
};

export default FleetHero;
