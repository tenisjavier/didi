import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface PartnerFoodHeroProps {
  title: string;
  desc: string;
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const PartnerFoodHero = ({ title, desc, image }: PartnerFoodHeroProps) => {
  const props: CTAProps = {
    hero: true,
    title: title,
    desc: desc,
    textColor: t("PartnerFoodHero.textColor"),
    bgColor: t("PartnerFoodHero.bgColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData!}
        alt={image.description}
        className="z-10 m-4 w-100 rounded"
      ></GatsbyImage>
    ),
    btnMode: t("PartnerFoodHero.btnMode"),
    btnType: "foodDelivery",
    reverse: true,
  };

  return <CTASection {...props}></CTASection>;
};

export default PartnerFoodHero;
