import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const SilderSection = (props) => {
  const { title, items } = props;
  const [index, setIndex] = useState(0);
  const nextSlide = () => {
    if (index === items.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index === 0) {
      setIndex(items.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const showclass = "transition-opacity duration-700 ease-in opacity-100 h-fit";
  const hidclass = "opacity-0 h-fit";

  const textShow =
    "lg:ml-20 transition-opacity duration-700 ease-in opacity-100 w-4/5 lg:w-2/5";
  const textHide = "lg:ml-20 opacity-0 w-4/5 lg:w-2/5";

  const dotShow =
    "transition-opacity transition-colors duration-500 ease-in opacity-100 text-gray-primary text-base lg:text-lg mr-3 cursor-pointer";
  const dotHide =
    "transition-opacity transition-colors duration-500 ease-in opacity-770 text-gray-300 text-base lg:text-lg mr-3 cursor-pointer";

  return (
    <section className="min-h-[40rem]">
      <div className="container mx-auto text-gray-primary">
        <h2 className="mt-10 text-center text-4xl font-bold">{title}</h2>
        <div className="group relative my-4  mx-2 h-128 lg:mx-20 lg:h-110">
          <div
            className="absolute top-48 left-2 w-fit cursor-pointer p-2 text-4xl opacity-0 duration-300 ease-in hover:bg-gray-300 group-hover:opacity-100 group-hover:transition-all md:top-2/3 lg:left-8
                    xl:top-1/2"
            onClick={prevSlide}
            aria-hidden="true"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-8" />
          </div>
          <div
            className="absolute top-48 right-1 z-10 w-fit cursor-pointer p-2 text-4xl opacity-0 duration-300 ease-in hover:bg-gray-300 group-hover:opacity-100 group-hover:transition-all md:top-2/3 md:right-2 xl:top-1/2
                    xl:right-8"
            onClick={nextSlide}
            aria-hidden="true"
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-8" />
          </div>
          {items.map((data, idx) => {
            return (
              <div
                key={idx}
                className="absolute left-10 top-4 flex h-full w-4/5 flex-col items-center justify-start lg:left-24 lg:flex-row lg:justify-center"
              >
                <div className={idx === index ? showclass : hidclass}>
                  <GatsbyImage
                    image={getImage(data.image.gatsbyImageData)}
                    className=" w-52 lg:w-64  2xl:w-80"
                    alt={data.name}
                  />
                </div>
                <div className={idx === index ? textShow : textHide}>
                  <h2 className="mt-0 text-center  text-3xl font-bold">
                    {data.name}
                  </h2>
                  <p className="my-2 text-justify text-base  2xl:text-lg">
                    {data.description && data.description}
                    {data.descriptionForPax && data.descriptionForPax}
                  </p>
                  {data.des2 ? (
                    <p className="my-2 text-justify text-base 2xl:text-lg">
                      {" "}
                      {data.des2}{" "}
                    </p>
                  ) : null}
                </div>
              </div>
            );
          })}
          <div className="absolute bottom-32 flex w-full justify-center lg:top-110">
            {Array.from({ length: items.length }).map((item, i) => {
              return (
                <FontAwesomeIcon
                  icon={faCircle}
                  key={i}
                  className={i === index ? dotShow : dotHide}
                  onClick={() => setIndex(i)}
                  aria-hidden="true"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilderSection;
