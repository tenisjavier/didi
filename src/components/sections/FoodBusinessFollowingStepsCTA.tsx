import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface FoodBusinessFollowingStepsCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const FoodBusinessFollowingStepsCTA = ({ image }: FoodBusinessFollowingStepsCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("FoodBusinessFollowingStepsCTA.title"),
    bgColor: t("FoodBusinessFollowingStepsCTA.bgColor"),
    textColor: t("FoodBusinessFollowingStepsCTA.textColor"),
    bullets: t("FoodBusinessFollowingStepsCTA.bullets", { returnObjects: true }),
    image: image,
    imageStyle: "z-10 m-4 w-90 rounded",
    reverse: true,
  };
  return <CTASection {...props}></CTASection>;
};

export default FoodBusinessFollowingStepsCTA;
