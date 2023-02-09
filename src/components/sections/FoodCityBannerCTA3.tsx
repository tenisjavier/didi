import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodCityBannerCTA3Props {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
  data: {
    name: string;
  };
}

const FoodCityBannerCTA3 = ({ image, data }: FoodCityBannerCTA3Props) => {
  const { name } = data;
  const props: CTAProps = {
    hero: false,
    title: t("FoodCityBannerCTAThree.title", { city: `${name}` }),
    desc: t("FoodCityBannerCTAThree.desc", { city: `${name}` }),
    bgColor: t("FoodCityBannerCTAThree.bgColor"),
    textColor: t("FoodCityBannerCTAThree.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100 rounded",
    bgImage: "z-10 m-4 w-100 rounded",
    btnMode: t("FoodCityBannerCTAThree.btnMode"),
    btnType: "foodEater",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodCityBannerCTA3;
