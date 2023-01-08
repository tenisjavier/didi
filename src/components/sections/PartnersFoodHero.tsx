import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PartnersFoodHeroProps {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  image?: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PartnersFoodHero = ({ bgImage, image }: PartnersFoodHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: t("PartnersFoodHero.title"),
    desc: t("PartnersFoodHero.desc"),
    textColor: t("PartnersFoodHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-75 md:block",
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: t("PartnersFoodHero.btnMode"),
    btnType: t("PartnersFoodHero.btnType"),
  };
  return <CTASection {...props}></CTASection>;
};

export default PartnersFoodHero;
