import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PartnerFoodHeroProps {
  title: string;
  desc: string;
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const PartnerFoodHero = ({ title, desc, image }: PartnerFoodHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: desc,
    textColor: t("PartnerFoodHero.textColor"),
    bgColor: t("PartnerFoodHero.bgColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: t("PartnerFoodHero.btnMode"),
    btnType: "foodDelivery",
    reverse: true,
  };

  return <CTASection {...props}></CTASection>;
};

export default PartnerFoodHero;
