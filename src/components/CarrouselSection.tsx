import React, { useState } from "react";
import Image from "./Image";

export interface CarrouselSectionProps {
  columns: {
    title: string;
    image: {
      title: string;
      description: string;
      gatsbyImageData: React.ReactNode;
    };
  }[];
  bgColor: string;
  textColor: string;
  updateHero: any;
}

const CarrouselSection = ({
  columns,
  bgColor,
  textColor,
  updateHero,
}: CarrouselSectionProps) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section
      className={` text-${textColor} flex flex-wrap items-center justify-center`}
    >
      <div
        className={` w-80 lg:w-fit p-2 lg:p-4 absolute z-30 h-32 ${bgColor} rounded-xl shadow-xl`}
      >
        <div className="flex justify-center items-center h-full ">
          {columns.map((col, index) => (
            <div
              onClick={() => {
                setActiveItem(index === activeItem ? 1 : index);
                updateHero(index);
              }}
              className={`${
                index === activeItem
                  ? "grayscale-0 font-bold"
                  : "grayscale font-light"
              } w-44 flex flex-col hover:cursor-pointer justify-center items-center h-full border-0 border-l-2 first:border-l-0 border-solid border-gray-light`}
            >
              <div>
                <Image imageData={col.image}></Image>
              </div>
              <div className="mt-2 text-center text-xs lg:text-sm px-2">
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
