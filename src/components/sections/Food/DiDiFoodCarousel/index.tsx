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
    speedAutoPlay: 10000,
    imageContainerStyle: "w-32",
    imageStyle: "w-32",
  };

  return <Carousel {...props}></Carousel>;
};

export default DiDiFoodCarousel;
