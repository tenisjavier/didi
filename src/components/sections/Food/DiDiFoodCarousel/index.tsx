import React from "react";
import Carousel, { CarouselProps } from "../../../Carousel";
import { ImageDataType } from "../../../Image";

interface DiDiFoodCarouselProps {
  images?: ImageDataType[];
}

const DiDiFoodCarousel = ({ images }: DiDiFoodCarouselProps) => {
  const props: CarouselProps = {
    slides: [],
    images,
    carouselType: "Images",
    slidesToShow: 4,
    isAutoPlay: true,
    speedAutoPlay: 3000,
  };

  return <Carousel {...props}></Carousel>;
};

export default DiDiFoodCarousel;
