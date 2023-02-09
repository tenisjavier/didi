import React, { useState, useRef, useEffect } from "react";
import CardsCarouselItem, { CardsCarouselItemProps } from "./CardsCarouselItem";

export interface CardsCarouselProps {
  title: string;
  desc: string;
  bgColor?: string;
  cards: CardsCarouselItemProps[];
}

const CardsCarousel = ({ title, desc, bgColor, cards }: CardsCarouselProps) => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  let btnStyleActive = "m-4 text-4xl cursor-pointer border-0";
  let btnStyleDisabled = "m-4 text-4xl font-light text-gray-300 border-0";

  useEffect(() => {
    carouselRef?.current?.scrollTo({
      left: index * 1450,
      behavior: "smooth",
    });
  }, [index]);

  return (
    <section className={`w-full ${bgColor}`}>
      <div className="container mx-auto">
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
                index > cards.length / 4 ? btnStyleDisabled : btnStyleActive
              }
              onClick={() =>
                index > cards.length / 4 ? null : setIndex(index + 1)
              }
            >
              →
            </button>
          </div>
        </div>
        <div
          ref={carouselRef}
          className="flex gap-8 snap-x w-full h-[500px]  overflow-x-auto lg:overflow-x-hidden px-8"
        >
          {cards.map((card, index) => {
            return (
              <CardsCarouselItem {...card} key={index}></CardsCarouselItem>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardsCarousel;
