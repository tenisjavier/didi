import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface StoreFleetHeroProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  image?: any;
}

const StoreFleetHero = ({ bgImage, image }: StoreFleetHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("StoreFleetHero.title"),
    desc: t("StoreFleetHero.desc"),
    textColor: t("StoreFleetHero.textColor"),
    bgColor: t("StoreFleetHero.bgColor"),
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
      btnMode: t("StoreFleetHero.btnMode"),
      btnType: "fleet",
    }),
  };
  return <CTASection {...props}></CTASection>;
};

export default StoreFleetHero;
