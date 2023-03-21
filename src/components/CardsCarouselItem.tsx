import React from "react";

export interface CardsCarouselItemProps {
  title: string;
  desc: string;
  subDesc?: string;
  reviewAuthor?: string;
  reviewRole?: string;
  reviewGeo?: string;
  reviewDate?: string;
  type: string;
  imageSrc: string;
  link?: string;
}

const CardsCarouselItem = ({
  title,
  desc,
  subDesc,
  type,
  imageSrc,
  reviewAuthor,
  reviewRole,
  reviewDate,
  reviewGeo,
  link,
}: CardsCarouselItemProps) => {
  let cardImage: any;
  let cardLink: any;
  if (type === "press") {
    cardImage = (
      <div>
        <a href="#">
          <img className="w-1/2 mb-4 mt-8" src={imageSrc}></img>
        </a>
      </div>
    );
    cardLink = <a href={link}>Conoce Más →</a>;
  }
  if (type === "review") {
    cardImage = (
      <div className="flex justify-start items-start w-full">
        <div className="flex justify-start items-center">
          <img className="w-1/4  rounded-full" src={imageSrc}></img>
          <div className="ml-2">
            <h5 className="m-0 p-0">{reviewAuthor}</h5>
            <p className="text-gray-400">{reviewRole}</p>
          </div>
        </div>
        <p className="text-gray-400 mt-1">{reviewDate}</p>
      </div>
    );
    cardLink = <p className="text-gray-400">{reviewGeo}</p>;
  }
  return (
    <div
      className={`${
        type === "press" &&
        "group transition-all duration-130 hover:mt-0 hover:ease-in hover:h-[490px]"
      } mt-6   relative flex  justify-between flex-col w-[345px] bg-white p-6 shadow-md shadow-gray-200 snap-center h-[450px]   overflow-hidden flex-shrink-0 rounded`}
    >
      <div>
        {cardImage}
        <a href="#">
          <h3 className="text-2xl font-bold my-8">{title}</h3>
        </a>
        <p className="text-lg">{desc}</p>
        <p className="text-gray-400 mt-4 hidden group-hover:block">{subDesc}</p>
      </div>
      <div>{cardLink}</div>
    </div>
  );
};

export default CardsCarouselItem;
