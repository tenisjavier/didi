import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner, { BannerProps } from "./Banner";
import Image from "./Image";

function NextArrow(props: any) {
  const { onClick, arrow, arrowColor } = props;
  return (
    <button
      className={
        `${arrowColor} absolute z-50 right-5 top-1/2 transform -translate-y-1/2 text-4xl sm:text-2sm border-0 p-0 outline-0 bg-inherit cursor-pointer hover:font-bold m-0`
      }
      onClick={onClick}
    >
      {arrow}
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick, arrow, arrowColor } = props;
  return (
    <button
      className={
        `${arrowColor} absolute z-50 left-5 top-1/2 transform -translate-y-1/2 text-4xl sm:text-2sm border-0 p-0 outline-0 bg-inherit cursor-pointer hover:font-bold m-0`
      }
      onClick={onClick}
    >
      {arrow}
    </button>
  );
}

export interface CarouselProps {
  slides?: BannerProps[];
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
  carouselType: string;
  slidesToShow?: number;
  slidesToScroll?: number;
  arrowNext?: string;
  arrowPrev?: string;
  arrowColor?: string;
}

const Carousel = (props: CarouselProps) => {
  const { slides, carouselType, slidesToShow, slidesToScroll, images, arrowNext, arrowPrev, arrowColor } = props;

  const toShow = (slidesToShow) ? slidesToShow : 1;
  const toScroll = (slidesToScroll) ? slidesToShow : 1;

  let sliderContent;

  if(carouselType === "Banner") {
    sliderContent = slides?.map((sld) => {
      return <div className={`p-4`}><Banner {...sld}></Banner></div>;
    });
  } else if(carouselType === "Images") {
    sliderContent = images?.map((img) => {
      return <div className={`p-4`}><Image imageData={img} imageStyle="z-10 my-10 w-full"></Image></div>;
    });
  }

  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    centerMode: true,
    slidesToShow: toShow,
    slidesToScroll: toScroll,
    nextArrow: <NextArrow arrow={arrowNext} arrowColor={arrowColor} />,
    prevArrow: <PrevArrow arrow={arrowPrev} arrowColor={arrowColor} />,
  };

  return (
    <Slider {...settings}>
      {sliderContent && sliderContent}
    </Slider>
  );
};

export default Carousel;
