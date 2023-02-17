import React, { useState, useRef, useEffect } from "react";
import CardsCarouselItem, { CardsCarouselItemProps } from "./CardsCarouselItem";
import Image from "./Image";
export interface CardsCarouselProps {
  title: string;
  desc: string;
  bgColor?: string;
  bgImage?: any;
  bgImageStyle?: string;
  cards: CardsCarouselItemProps[];
}

const CardsCarousel = ({
  title,
  desc,
  bgColor,
  bgImage,
  bgImageStyle,
  cards,
}: CardsCarouselProps) => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  let btnStyleActive =
    "m-4 text-4xl border-0 p-0 outline-0 bg-inherit cursor-pointer hover:font-bold";
  let btnStyleDisabled =
    "m-4 text-4xl font-light text-gray-300 border-0 p-0 outline-0 bg-inherit";

  useEffect(() => {
    // @ts-ignore
    carouselRef?.current?.scrollTo({
      left: index * 1450,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <section
      className={`w-full flex ${bgColor} py-10 relative min-h-[40rem] items-center justify-center overflow-hidden`}
    >
      <div className="container mx-auto w-full z-10">
        <div className="flex justify-between mb-12 mx-4">
          <div>
            <h2 className="text-4xl font-bold py-4">{title}</h2>
            <p className="text-lg">{desc}</p>
          </div>
          <div className="justify-between hidden lg:flex">
            <button
              className={index !== 0 ? btnStyleActive : btnStyleDisabled}
              onClick={() => (index !== 0 ? setIndex(index - 1) : null)}
            >
              ←
            </button>
            <button
              className={
                index > cards.length / 3 ? btnStyleDisabled : btnStyleActive
              }
              onClick={() =>
                index > cards.length / 3 ? null : setIndex(index + 1)
              }
            >
              →
            </button>
          </div>
        </div>
        <div
          ref={carouselRef}
          className="flex gap-8 snap-x w-full h-[500px]  overflow-x-auto px-8"
        >
          {cards.map((card, index) => {
            return (
              <CardsCarouselItem {...card} key={index}></CardsCarouselItem>
            );
          })}
        </div>
      </div>
      {bgImage && <Image imageData={bgImage} imageStyle={bgImageStyle}></Image>}
    </section>
  );
};

export default CardsCarousel;
