import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CTASection, { CTAProps } from "../CTASection";

interface RestaurantTestimonialCTAProps {
  image: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  };
}

const RestaurantTestimonialCTA = ({ image }: RestaurantTestimonialCTAProps) => {
  const { t } = useTranslation();
  const props: CTAProps = {
    hero: false,
    title: t("RestaurantTestimonialCTA.title"),
    desc: t("RestaurantTestimonialCTA.desc"),
    bgColor: t("RestaurantTestimonialCTA.bgColor"),
    textColor: t("RestaurantTestimonialCTA.textColor"),
    image: (
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className="z-10 m-4 w-100"
      ></GatsbyImage>
    ),

    reverse: false,
  };
  return <CTASection {...props}></CTASection>;
};

export default RestaurantTestimonialCTA;
