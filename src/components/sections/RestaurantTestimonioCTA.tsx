import React from "react";
import { t } from "../../context/countryContext";
import CTASection, { CTAProps } from "../CTASection";

interface RestaurantTestimonialCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: any;
  };
}

const RestaurantTestimonialCTA = ({ image }: RestaurantTestimonialCTAProps) => {
  const props: CTAProps = {
    hero: false,
    title: t("RestaurantTestimonialCTA.title"),
    desc: t("RestaurantTestimonialCTA.desc"),
    bgColor: t("RestaurantTestimonialCTA.bgColor"),
    textColor: t("RestaurantTestimonialCTA.textColor"),
    image: image,
    imageStyle: "z-10 m-4 w-100",
    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default RestaurantTestimonialCTA;
