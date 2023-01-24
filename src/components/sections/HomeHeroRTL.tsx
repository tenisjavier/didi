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
    gatsbyImageData: any;
  };
}

const HomeHeroRTL = ({ bgImage, image }: HomeHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("HomeHero.title"),
    textColor: t("HomeHero.textColor"),
    bgImage: bgImage,
    ...(image && {
      image: image,
    }),
    bgImageStyle: "!absolute z-0 h-full w-full md:block",
    imageStyle: "z-10 m-4 w-100 rounded-full",
    btnMode: t("HomeHero.btnMode"),
    btnType: "both",
    RTL: true
  };
  return <CTASection {...props}></CTASection>;
};

export default HomeHeroRTL;
