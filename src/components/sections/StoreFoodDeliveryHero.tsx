import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface StoreFoodDeliveryHeroProps {
  bgImage?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  image?: any;
}

const StoreFoodDeliveryHero = ({
  bgImage,
  image,
}: StoreFoodDeliveryHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("StoreFoodDeliveryHero.title"),
    desc: t("StoreFoodDeliveryHero.desc"),
    textColor: t("StoreFoodDeliveryHero.textColor"),
    bgColor: t("StoreFoodDeliveryHero.bgColor"),
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
      btnMode: t("StoreFoodDeliveryHero.btnMode"),
      btnModeSecondary: "hidden",
      btnType: "foodEater",
    }),
  };
  return <CTASection {...props}></CTASection>;
};

export default StoreFoodDeliveryHero;
