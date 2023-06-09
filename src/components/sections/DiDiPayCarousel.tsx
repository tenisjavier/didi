import React from "react";
import { t } from "../../context/countryContext";
import Carousel, { CarouselProps } from "../Carousel";
import Image from "../Image";

interface DiDiPayCarouselProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const DiDiPayCarousel = ({ images }: DiDiPayCarouselProps) => {
  const props: CarouselProps = {
    slides: [],
    images: images,
    carouselType: "Banner",
    arrowNext: "→",
    arrowPrev: "←",
    arrowColor: "text-white"
  };

  const banners = [
    {
      title: "¡Siempre a tiempo con tus pagos!",
      desc: "Con DiDi Pay ya no te olvidarás de pagar tus servicios a tiempo",
    },
    {
      title: "La excusa perfecta para consentir",
      desc: "Regala tarjetas de tus marcas favoritas con DiDi Pay",
    },
    {
      title: "Mantente conectado",
      desc: "Recarga tiempo aire desde $10 m.n., en donde estés y al número que tú quieras",
    },
  ];

  if (images) {
    props.slides = images.map((img, index) => {
      return {
        title: banners[index].title,
        desc: banners[index].desc,
        bgColor: t("DiDiPayBanner.bgColor"),
        textColor: t("DiDiPayBanner.textColor"),
        image: <Image imageData={img} imageStyle="z-10 my-10 w-56"></Image>,
        justifyContent: "justify-around",
        height: "h-auto",
        isRounded: false
      };
    });
  }
  return <Carousel {...props}></Carousel>;
};

export default DiDiPayCarousel;
