import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface FoodBlogHero {
  bgImage: any;
}

const FoodBlogHero = ({ bgImage }: FoodBlogHero) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: true,
    title: t("FoodBlogHero.title"),
    desc: t("FoodBlogHero.desc"),
    textColor: t("FoodBlogHero.textColor"),
    bgImage: (
      <GatsbyImage
        image={getImage(bgImage)!}
        alt={bgImage.description}
        className="!absolute z-0 h-full w-full brightness-50  md:block"
      ></GatsbyImage>
    ),
    btnMode: t("FoodBlogHero.btnMode"),
    btnType: "foodBusiness",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodBlogHero;
