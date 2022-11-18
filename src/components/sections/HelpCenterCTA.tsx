import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface HelpCenterCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const HelpCenterCTA = ({ image }: HelpCenterCTA) => {
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
