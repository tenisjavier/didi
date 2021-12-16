import React from "react";
import Btn from "../Btn";
import { StaticImage } from "gatsby-plugin-image";

const ImageText = (props) => {
  return (
    <section className="flex relative flex-column justify-center  w-full min-h-[40rem] max-h-[45rem] bg-orange-primary ">
      <div className="md:w-1/2 lg:w-2/5 px-4 text-center text-white z-10 md:text-left md:pl-20 md:pr-0">
        <h2 className="text-2xl md:text-4xl pb-6 font-bold">MANEJA CON DiDi</h2>
        <p className="mb-5">
          Para DiDi, los socios conductores y socios taxistas son muy
          importantes. Por eso, nos preocupamos por tener tasas de servicio
          competitivas que beneficien los ingresos de los socios conductores.
        </p>
        <Btn type="drv" mode="light"></Btn>
      </div>
      <StaticImage
        src="../../images/bg-image-orange-drv.jpg"
        alt="didi conductor"
        className=" object-fill z-0 absolute h-full w-full"
      ></StaticImage>
    </section>
  );
};

export default ImageText;
