import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DiDiPayHeroProps {
  image?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DiDiPayHero = ({ bgImage, image }: DiDiPayHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DiDiPayHero.title"),
    desc: t("DiDiPayHero.desc"),
    textColor: t("DiDiPayHero.textColor"),
    bgColor: t("DiDiPayHero.bgColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    ...(image && {
      image: (
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          className="!z-10 m-4 w-100"
        ></GatsbyImage>
      ),
      reverse: true,
    }),
    btnMode: t("DiDiPayHero.btnMode"),
    btnType: "payment",
  };
  return <CTASection {...props}></CTASection>;
};

export default DiDiPayHero;
