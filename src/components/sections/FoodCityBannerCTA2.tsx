import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodCityBannerCTA2Props {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  data: {
    name: string;
  };
}

const FoodCityBannerCTA2 = ({ image, data }: FoodCityBannerCTA2Props) => {
  const { name } = data;
  const props: CTAProps = {
    hero: false,
    title: t("FoodCityBannerCTATwo.title", { city: `${name}` }),
    desc: t("FoodCityBannerCTATwo.desc", { city: `${name}` }),
    bgColor: t("FoodCityBannerCTATwo.bgColor"),
    textColor: t("FoodCityBannerCTATwo.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    btnMode: t("FoodCityBannerCTATwo.btnMode"),
    btnType: "foodEater",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodCityBannerCTA2;
