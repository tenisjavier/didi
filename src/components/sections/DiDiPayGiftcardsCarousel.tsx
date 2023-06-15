import React from "react";
import Carousel, { CarouselProps } from "../Carousel";

interface DiDiPayCarouselProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const DiDiPayPartnersCarousel = ({ images }: DiDiPayCarouselProps) => {
  const props: CarouselProps = {
    slides: [],
    images: images,
    carouselType: "Images",
    slidesToShow: 4,
    arrowNext: ">",
    arrowPrev: "<",
    arrowColor: "text-orange-primary"
  };

  return <Carousel {...props}></Carousel>;
};

export default DiDiPayPartnersCarousel;
