import React from "react";
import Carousel, { CarouselProps } from "../../../Carousel";
import { ImageDataType } from "../../../Image";

interface DiDiPayAutoCarouselProps {
  images?: ImageDataType[];
  imagesMobile?: ImageDataType[];
}

const DiDiPayAutoCarousel = ({ images, imagesMobile }: DiDiPayAutoCarouselProps) => {
  const slidesToShow = 2;
  let customSlides = images;
  let customSlidesMobile = imagesMobile;

  if (images && customSlides && slidesToShow === images?.length) {
    customSlides = [...customSlides, ...images];
  }

  if (customSlidesMobile && customSlidesMobile && slidesToShow === imagesMobile?.length) {
    customSlidesMobile = [...customSlidesMobile, ...imagesMobile];
  }

  const props: CarouselProps = {
    slides: [],
    images: customSlides,
    carouselType: "Images",
    slidesToShow: 1,
    isAutoPlay: true,
    speedAutoPlay: 10000,
    imagesMobile: customSlidesMobile,
    slidesToShowMobile: 1,
    imageContainerStyle: "xl:h-105", //448px
    imageStyle: "xl:h-105", //448px
  };

  return <Carousel {...props}></Carousel>;
};

export default DiDiPayAutoCarousel;
