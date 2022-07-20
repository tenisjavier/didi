import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface PaxHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const CareerHero = ({ bgImage }: PaxHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("CareerHero.title"),
    desc: t("CareerHero.desc"),
    textColor: t("CareerHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData!}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("CareerHero.btnMode"),
    btnLink: t("CareerHero.btnLink"),
    btnText: t("CareerHero.btnText"),
  };
  return <CTASection {...props}></CTASection>;
};

export default CareerHero;
