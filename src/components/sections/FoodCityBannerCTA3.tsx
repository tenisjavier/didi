import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface FoodCityBannerCTA3Props {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
  data: {
    name: string;
  };
}

const FoodCityBannerCTA3 = ({ image, data }: FoodCityBannerCTA3Props) => {
  const { t } = useTranslation();
  const { name } = data;
  const props: CTAProps = {
    hero: false,
    title: t("FoodCityBannerCTA3.title", { city: `${name}` }),
    desc: t("FoodCityBannerCTA3.desc", { city: `${name}` }),
    bgColor: t("FoodCityBannerCTA3.bgColor"),
    textColor: t("FoodCityBannerCTA3.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100 rounded"
      ></GatsbyImage>
    ),
    btnMode: t("FoodCityBannerCTA3.btnMode"),
    btnType: "foodEater",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodCityBannerCTA3;
