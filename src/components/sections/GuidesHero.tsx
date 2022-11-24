import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface GuidesHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const GuidesHero = ({ bgImage }: GuidesHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("GuidesHero.title"),
    desc: t("GuidesHero.desc"),
    textColor: t("GuidesHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnType: t("GuidesHero.btnType"),
    btnMode: t("GuidesHero.btnMode"),
  };
  return <CTASection {...props}></CTASection>;
};

export default GuidesHero;
