import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodCityRestaurantCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  data: {
    name: string;
  };
}

const FoodCityRestaurantCTA = ({ image, data }: FoodCityRestaurantCTAProps) => {
  (data);
  const { name } = data;
  const titleContent = t("FoodCityRestaurantCTA.title", { city: name });
  const descContent = t("FoodCityRestaurantCTA.desc", { city: name });
  (name);
  const props: CTAProps = {
    hero: false,
    title: titleContent,
    desc: descContent,
    bgColor: t("FoodCityRestaurantCTA.bgColor"),
    textColor: t("FoodCityRestaurantCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded"
      ></GatsbyImage>
    ),
    btnMode: t("FoodCityRestaurantCTA.btnMode"),
    btnType: "foodEater",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodCityRestaurantCTA;
