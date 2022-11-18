import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface SafetyPaxImgHeroProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const SafetyPaxImgHero = ({ image }: SafetyPaxImgHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("SafetyPaxImgHero.title"),
    desc: t("SafetyPaxImgHero.desc"),
    textColor: t("SafetyPaxImgHero.textColor"),
    bgColor: t("SafetyPaxImgHero.bgColor"),
    ...(image && {
      image: (
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          className="z-10 m-4 w-100 rounded-full"
        ></GatsbyImage>
      ),
    }),
    btnMode: t("SafetyPaxImgHero.btnMode"),
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default SafetyPaxImgHero;
