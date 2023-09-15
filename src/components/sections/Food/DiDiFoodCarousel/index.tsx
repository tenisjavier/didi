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
    slidesToShow: 5,
    isAutoPlay: true,
    speedAutoPlay: 10000,
    imageContainerStyle: "",
    imageStyle: "",
    slidesToShowMobile: 2,
  };

  return <Carousel {...props}></Carousel>;
};

export default DiDiFoodCarousel;
