import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface AboutWomenDrvHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const AboutWomenDrvHero = ({ bgImage }: AboutWomenDrvHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("AboutWomenDrvHero.title"),
    desc: t("AboutWomenDrvHero.desc"),
    textColor: t("AboutWomenDrvHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("AboutWomenDrvHero.btnMode"),
    btnType: "both",
  };
  return <CTASection {...props}></CTASection>;
};

export default AboutWomenDrvHero;
