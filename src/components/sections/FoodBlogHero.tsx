import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodBlogHero {
  bgImage: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FoodBlogHero = ({ bgImage }: FoodBlogHero) => {
  const props: CTAProps = {
    hero: true,
    title: t("FoodBlogHero.title"),
    desc: t("FoodBlogHero.desc"),
    textColor: t("FoodBlogHero.textColor"),
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full brightness-50  md:block",
    btnMode: t("FoodBlogHero.btnMode"),
    btnType: "foodEater",
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodBlogHero;
