import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface DeliveryPersonalHeroProps {
  bgImage: any;
}

const DeliveryPersonalHero = ({ bgImage }: DeliveryPersonalHeroProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("DeliveryPersonalHero.title"),
    desc: t("DeliveryPersonalHero.desc"),
    textColor: t("DeliveryPersonalHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)!}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full md:block"
      ></GatsbyImage>
    ),
    btnMode: t("DeliveryPersonalHero.btnMode"),
    btnType: "pax",
  };
  return <CTASection {...props}></CTASection>;
};

export default DeliveryPersonalHero;
