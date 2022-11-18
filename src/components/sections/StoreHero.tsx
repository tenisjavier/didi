import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface StoreHeroProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  image?: any;
  title?: string;
  desc?: string;
  textColor?: string;
  bgColor?: string;
}

const StoreHero = ({
  bgImage,
  image,
  title,
  desc,
  textColor,
  bgColor,
}: StoreHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: title || t("StoreHero.title"),
    desc: desc || t("StoreHero.desc"),
    textColor: textColor || t("StoreHero.textColor"),
    bgColor: bgColor || t("StoreHero.bgColor"),
    ...(bgImage && {
      bgImage: (
        <GatsbyImage
          image={bgImage.gatsbyImageData}
          alt={bgImage.description}
          className="!absolute z-0 h-full w-full md:block"
        ></GatsbyImage>
      ),
    }),
    ...(image && {
      image: image,
      reverse: true,
      btnMode: "light",
      btnModeSecondary: "hidden",
      btnType: "pax",
    }),
  };
  return <CTASection {...props}></CTASection>;
};

export default StoreHero;
