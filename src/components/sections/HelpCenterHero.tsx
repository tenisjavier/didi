import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface HelpCenterHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const HelpCenterHero = ({ bgImage }: HelpCenterHeroProps) => {
  console.log(bgImage);
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("HelpCenterHero.title"),
    desc: t("HelpCenterHero.desc"),
    textColor: t("HelpCenterHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData!}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-75 md:block"
      ></GatsbyImage>
    ),
    btnMode: t("HelpCenterHero.btnMode"),
    btnType: "both",
  };
  return <CTASection {...props}></CTASection>;
};

export default HelpCenterHero;
