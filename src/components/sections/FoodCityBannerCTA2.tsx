import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface FoodCityBannerCTA2Props {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  data: {
    name: string;
  };
}

const FoodCityBannerCTA2 = ({ image, data }: FoodCityBannerCTA2Props) => {
  const { t } = useTranslation();
  const { name } = data;
  const props: CTAProps = {
    hero: false,
    title: t("FoodCityBannerCTA2.title", { city: `${name}` }),
    desc: t("FoodCityBannerCTA2.desc", { city: `${name}` }),
    bgColor: t("FoodCityBannerCTA2.bgColor"),
    textColor: t("FoodCityBannerCTA2.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded"
      ></GatsbyImage>
    ),
    btnMode: t("FoodCityBannerCTA2.btnMode"),
    btnType: "foodEater",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodCityBannerCTA2;
