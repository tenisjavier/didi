import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface FleetHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const FleetHero = ({ bgImage }: FleetHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("FleetHero.title"),
    desc: t("FleetHero.desc"),
    textColor: t("FleetHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-50 md:block"
      ></GatsbyImage>
    ),
    btnMode: t("FleetHero.btnMode"),
    btnType: "drv",
  };
  return <CTASection {...props}></CTASection>;
};

export default FleetHero;
