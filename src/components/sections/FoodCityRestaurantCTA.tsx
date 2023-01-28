import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodCityRestaurantCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  data: {
    name: string;
  };
}

const FoodCityRestaurantCTA = ({ image, data }: FoodCityRestaurantCTAProps) => {
  const { name } = data;
  const props: CTAProps = {
    hero: false,
    title: t("FoodCityRestaurantCTA.title", { city: `${name}` }),
    desc: t("FoodCityRestaurantCTA.desc", { city: `${name}`, city1: `${name}`, city2: `${name}`, city3: `${name}`, city4: `${name}`, }),
    bgColor: t("FoodCityRestaurantCTA.bgColor"),
    textColor: t("FoodCityRestaurantCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: t("FoodCityRestaurantCTA.btnMode"),
    btnType: "foodEater",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodCityRestaurantCTA;
