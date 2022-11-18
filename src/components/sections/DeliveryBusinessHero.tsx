import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface DeliveryBusinessHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const DeliveryBusinessHero = ({ bgImage }: DeliveryBusinessHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("DeliveryBusinessHero.title"),
    desc: t("DeliveryBusinessHero.desc"),
    textColor: t("DeliveryBusinessHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={bgImage.gatsbyImageData}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("DeliveryBusinessHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default DeliveryBusinessHero;
