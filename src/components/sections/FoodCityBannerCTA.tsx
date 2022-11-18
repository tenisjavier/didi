import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodCityBannerCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  data: {
    name: string;
  };
}

const FoodCityBannerCTA = ({ image, data }: FoodCityBannerCTAProps) => {
  const { name } = data;
  const props: CTAProps = {
    hero: false,
    title: t("FoodCityBannerCTA.title", { city: `${name}` }),
    desc: t("FoodCityBannerCTA.desc", { city: `${name}` }),
    bgColor: t("FoodCityBannerCTA.bgColor"),
    textColor: t("FoodCityBannerCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded"
      ></GatsbyImage>
    ),
    btnMode: t("FoodCityBannerCTA.btnMode"),
    btnType: "foodEater",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodCityBannerCTA;
