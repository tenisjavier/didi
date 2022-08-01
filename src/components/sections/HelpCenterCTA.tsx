import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface HelpCenterCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const HelpCenterCTA = ({ image }: HelpCenterCTA) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("HelpCenterCTA.title"),
    desc: t("HelpCenterCTA.desc"),
    textColor: t("HelpCenterCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-100 h-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("HelpCenterCTA.btnMode"),
    btnText: t("HelpCenterCTA.btnText"),
    btnLink: t("HelpCenterCTA.btnLink"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default HelpCenterCTA;
