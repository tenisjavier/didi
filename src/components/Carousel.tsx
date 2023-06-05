import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner, { BannerProps } from "./Banner";

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button className={"absolute z-50 right-5 top-1/2 transform -translate-y-1/2 text-4xl sm:text-2sm border-0 p-0 outline-0 bg-inherit cursor-pointer hover:font-bold m-0"} onClick={onClick}>→</button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button className={"absolute z-50 left-5 top-1/2 transform -translate-y-1/2 text-4xl sm:text-2sm border-0 p-0 outline-0 bg-inherit cursor-pointer hover:font-bold m-0"} onClick={onClick}>←</button>
  );
}

export interface CarouselProps {
  slides: BannerProps[];
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const Carousel = (props: CarouselProps) => {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  /* <Image imageData={image} imageStyle={imageStyle}></Image> */
  return (
    <Slider {...settings}>
      {props.slides &&
        props.slides.map((sld) => {
          return <Banner {...sld}></Banner>;
        })
      }
    </Slider>
  );
}

export default Carousel;
