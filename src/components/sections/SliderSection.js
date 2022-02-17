import React, { useState } from "react";
import taxicar from "../../images/didi-taxi.png";
import deliverycar from "../../images/didi-delivery.png";
import expresscar from "../../images/didi-express.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
const dataslider = [
  {
    picture: expresscar,
    alt: "Express",
    title: "Express",
    des: "Vehículos particulares de 4 puertas y modelo 2009 en adelante con A/C y airbags. ¿Tienes uno? Express es para ti.",
  },
  {
    picture: taxicar,
    alt: "Taxi",
    title: "Taxi",
    des: "Recibe pedidos de servicios a través de la app o recoge a los pasajeros en la calle y conecta el viaje a través de DiDi Taxi",
  },
  {
    picture: deliverycar,
    alt: "DiDi Entrega",
    title: "Entrega",
    des: "Envía o recibe paquetes, productos y documentos, de manera personal o para tu negocio",
  },
];

const SilderSection = ({ title, data }) => {
  const [index, setIndex] = useState(0);
  console.log(data);
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
      <div className="text-gray-primary container mx-auto">
        <h1 className="mt-10 text-center text-4xl font-bold">{title}</h1>
        <div className="h-128 lg:h-110 group  relative my-10 mx-2 lg:mx-20">
          <div
            className="absolute top-48 left-2 w-fit cursor-pointer p-2 text-4xl opacity-0 duration-300 ease-in hover:bg-gray-300 group-hover:opacity-100 group-hover:transition-all lg:top-1/2
                    lg:left-8"
            onClick={prevSlide}
            aria-hidden="true"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div
            className="absolute top-48 right-8 z-10 w-fit cursor-pointer p-2 text-4xl opacity-0 duration-300 ease-in hover:bg-gray-300 group-hover:opacity-100 group-hover:transition-all
                    lg:top-1/2"
            onClick={nextSlide}
            aria-hidden="true"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          {dataslider.map((data, idx) => {
            return (
              <div
                key={idx}
                className="absolute left-16 top-20 flex h-full w-4/5 flex-col items-center justify-start lg:left-24 lg:flex-row"
              >
                <div className={idx === index ? showclass : hidclass}>
                  <img
                    src={data.picture}
                    alt={data.alt}
                    className="h-52 lg:h-64 2xl:h-80"
                  />
                </div>
                <div className={idx === index ? textShow : textHide}>
                  <h2 className="mt-0 text-center  text-3xl font-bold">
                    {data.title}
                  </h2>
                  <p className="my-2 text-justify text-base  2xl:text-lg">
                    {data.des}
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
          <div className="2xl:top-105 absolute bottom-1 flex w-full justify-center">
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
