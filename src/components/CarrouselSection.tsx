import React, { useState } from "react";
import Image, { ImageDataType } from "./Image";

export interface CarrouselSectionProps {
  columns: {
    title: string;
    image: ImageDataType;
  }[];
  bgColor: string;
  textColor: string;
  updateHero: any;
  position?: "onHero" | "onSection" | "onMiddleSection";
}

const CarrouselSection = ({
  columns,
  bgColor,
  textColor,
  updateHero,
  position = "onMiddleSection",
}: CarrouselSectionProps) => {
  const [activeItem, setActiveItem] = useState(0);

  const positions = {
    onHero: "absolute top-115",
    onSection: "relative",
    onMiddleSection: "absolute",
  };

  return (
    <section
      className={`carousel-container text-${textColor} flex flex-wrap items-center justify-center`}
    >
      <div
        className={`${position && positions[position]
          } w-80 lg:w-fit p-2 lg:p-4 z-30 h-32 ${bgColor} rounded-xl shadow-xl`}
      >
        <div className="flex justify-center items-center h-full ">
          {columns.map((col, index) => (
            <div
              onClick={() => {
                setActiveItem(index === activeItem ? 1 : index);
                updateHero(index);
              }}
              className={`${index === activeItem
                ? "grayscale-0 font-bold"
                : "grayscale font-light"
                } w-44 flex flex-col hover:cursor-pointer justify-center items-center h-full border-0 border-l-2 first:border-l-0 border-solid border-gray-light`}
            >
              <div>
                <Image imageData={col.image} imageStyle="w-12 lg:w-14 carousel-image"></Image>
              </div>
              <div className="carousel-title mt-2 text-center h-8 lg:h-4 text-xs lg:text-sm px-2">
                {col.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarrouselSection;
