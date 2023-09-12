import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner, { BannerProps } from "./Banner";
import Image, { ImageDataType } from "./Image";

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
  images?: ImageDataType[];
  carouselType: 'Banner' | 'Images';
  slidesToShow?: number;
  slidesToScroll?: number;
  arrowNext?: string;
  arrowPrev?: string;
  arrowColor?: string;
  isAutoPlay?: boolean;
  speedAutoPlay?: number;
}

const Carousel = (props: CarouselProps) => {
  const { speedAutoPlay, isAutoPlay, slides, carouselType, slidesToShow, slidesToScroll, images, arrowNext, arrowPrev, arrowColor } = props;

  const toShow = (slidesToShow) ? slidesToShow : 1;
  const toScroll = (slidesToScroll) ? slidesToShow : 1;

  let sliderContent;

  if (carouselType === "Banner") {
    sliderContent = slides?.map((sld) => {
      return <div><Banner {...sld}></Banner></div>;
    });
  } else if (carouselType === "Images") {
    sliderContent = images?.map((img) => {
      return <div className={`flex align-center justify-self-center`}><Image imageData={img} imageStyle="z-10 w-full"></Image></div>;
    });
  }

  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    autoplay: isAutoPlay,
    speed: speedAutoPlay,
    autoplaySpeed: 0,
    slidesToShow: toShow,
    slidesToScroll: toScroll,
    pauseOnHover: false,
    cssEase: "linear",
    nextArrow: <NextArrow arrow={arrowNext} arrowColor={arrowColor} />,
    prevArrow: <PrevArrow arrow={arrowPrev} arrowColor={arrowColor} />,

    responsive: [
      {
        breakpoint: 1079,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ]
  };

  return (
    <Slider {...settings}>
      {sliderContent && sliderContent}
    </Slider>
  );
};

export default Carousel;
