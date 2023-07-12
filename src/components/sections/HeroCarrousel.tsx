// @desc Article Grid used for navigation
import React from "react";
import { t } from "../../context/countryContext";
import CarrouselSection, { CarrouselSectionProps } from "../CarrouselSection";

interface HeroCarrouselProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
  updateHero: any;
}
const HeroCarrousel = ({ images, updateHero }: HeroCarrouselProps) => {
  const props: CarrouselSectionProps = {
    bgColor: t("HeroCarrousel.bgColor"),
    textColor: t("HeroCarrousel.textColor"),
    updateHero: updateHero,
    columns: t("HeroCarrousel.columns", { returnObjects: true }),
  };
  props.columns.forEach((col: any, index: number) => {
    col.image = images[index];
  });

  return <CarrouselSection {...props}></CarrouselSection>;
};

export default HeroCarrousel;
