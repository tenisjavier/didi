import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface HomeHeroProps {
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

const HomeHeroBtn = ({ bgImage, image }: HomeHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("HomeHeroBtn.title"),
    textColor: t("HomeHeroBtn.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block brightness-75"
      ></GatsbyImage>
    ),
    ...(image && {
      image: (
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.description}
          className="z-10 m-4 w-80"
        ></GatsbyImage>
      ),
      reverse: true,
    }),
    btnMode: t("HomeHeroBtn.btnMode"),
    btnLink: t("HomeHeroBtn.btnLink"),
    btnText: t("HomeHeroBtn.btnText")
  };
  return <CTASection {...props}></CTASection>;
};

export default HomeHeroBtn;
