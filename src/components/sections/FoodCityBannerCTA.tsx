import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodCityBannerCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
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
    desc: t("FoodCityBannerCTA.desc", { city: `${name}`, city1: `${name}`, city2: `${name}`, city3: `${name}`,  }),
    bgColor: t("FoodCityBannerCTA.bgColor"),
    textColor: t("FoodCityBannerCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: t("FoodCityBannerCTA.btnMode"),
    btnType: "foodEater",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodCityBannerCTA;
