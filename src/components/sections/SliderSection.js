import React, { useState } from "react";
import taxicar from "../../images/taxi-car.jpg";
import fleetcar from "../../images/didi-fleet.png";
import expresscar from "../../images/car2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const SilderSection = ({ title }) => {
  const countryCode = window.location.pathname.split("/")[1];
  const data = useStaticQuery(graphql`
  {
    allContentfulProduct(filter: {category: {eq: "driver"}}) {
      nodes {
        country {
          code
        }
        image {
          gatsbyImageData(width: 700)
        }
        name
        description
      }
    }
  }
  `);

  const dataslider = data.allContentfulProduct.nodes.filter(
    (country) => country.country && country.country[0].code === countryCode
  );
  console.log(dataslider);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index === dataslider.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index === 0) {
      setIndex(dataslider.length - 1);
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
    <section className="min-h-[768px]">
      <div className="container mx-auto text-gray-primary">
        <h1 className="mt-10 text-4xl font-bold text-center">{title}</h1>
        <div className="my-10 mx-2 lg:mx-20  relative h-128 lg:h-110 group">
          <div
            className="text-4xl cursor-pointer p-2 hover:bg-gray-300 w-fit absolute top-48 md:top-2/3 xl:top-1/2 left-2 opacity-0 group-hover:opacity-100 group-hover:transition-all duration-300 ease-in
                    lg:left-8"
            onClick={prevSlide}
            aria-hidden="true"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            className="text-4xl cursor-pointer p-2 hover:bg-gray-300 w-fit absolute top-48 md:top-2/3 xl:top-1/2 right-1 md:right-2 xl:right-8 opacity-0 group-hover:opacity-100 group-hover:transition-all duration-300 ease-in
                    z-10"
            onClick={nextSlide}
            aria-hidden="true"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          {dataslider.map((data, idx) => {
            return (
              <div
                key={idx}
                className="absolute w-4/5 h-full left-10 lg:left-24 top-20 flex flex-col lg:flex-row justify-start lg:justify-center items-center"
              >
                <div className={idx === index ? showclass : hidclass}>
                  <GatsbyImage
                    image={getImage(data.image.gatsbyImageData)}
                    className="h-52 lg:h-64 2xl:h-80 w-52 lg:w-64 2xl:w-80"
                    alt={data.name}
                  /> 
                </div>
                <div className={idx === index ? textShow : textHide}>
                  <h2 className="text-3xl font-bold  mt-0 text-center">
                    {data.name}
                  </h2>
                  <p className="text-base 2xl:text-lg my-2  text-justify">
                    {data.description}
                  </p>
                  {data.des2 ? (
                    <p className="text-base 2xl:text-lg my-2 text-justify">
                      {" "}
                      {data.des2}{" "}
                    </p>
                  ) : null}
                </div>
              </div>
            );
          })}
          <div className="absolute bottom-32 lg:top-110 flex justify-center w-full">
            {Array.from({ length: dataslider.length }).map((item, i) => {
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
