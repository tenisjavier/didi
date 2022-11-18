import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface AboutGlobalCTA {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const AboutGlobalCTA = ({ image }: AboutGlobalCTA) => {
  const props: CTAProps = {
    hero: false,
    title: t("AboutGlobalCTA.title"),
    desc: t("AboutGlobalCTA.desc"),
    textColor: t("AboutGlobalCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded-full"
      ></GatsbyImage>
    ),
    btnMode: t("AboutGlobalCTA.btnMode"),
    btnText: t("AboutGlobalCTA.btnText"),
    btnLink: t("AboutGlobalCTA.btnLink"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default AboutGlobalCTA;
