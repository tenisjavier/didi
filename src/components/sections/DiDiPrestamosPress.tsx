import React from "react";
// import { t } from "../../context/countryContext";
// import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import CardsCarousel, { CardsCarouselProps } from "../CardsCarousel";

// interface DiDiPrestamosReviewsProps {
//   images: {
//     title: string;
//     description: string;
//     gatsbyImageData: IGatsbyImageData;
//   }[];
// }

const DiDiPrestamosPress = () => {
  const props: CardsCarouselProps = {
    title: "¿Qué dicen los medios sobre nosotros?",
    desc: "",
    bgColor: "bg-gray-light",
    cards: [
      {
        title: "Dinero en Imagen",
        desc: "DiDi anuncia préstamos de hasta 30 mil pesos; así puedes conseguirlo",
        subDesc:
          "Los préstamos se harán de forma “personal, rápida y accesible”.",
        type: "press",
        imageSrc:
          "https://s3-us01.didiglobal.com/silver-bullet-img/2022-02-25/QPP8zewMgI1_RutxIM4Fb-Dinero%20en%20Imagen@3x.png",
      },
      {
        title: "Expansión",
        desc: "DiDi otorgará préstamos para socios y usuarios de hasta 30,000 pesos",
        subDesc:
          "La plataforma de movilidad DiDi tendrá un nuevo servicio en su app: DiDi Préstamos, un financiamiento personal que está disponible para pasajeros y conductores. ",
        type: "press",
        imageSrc:
          "https://s3-us01.didiglobal.com/silver-bullet-img/2022-02-25/EnWc9Mjd9BqkiQsmwhP_--Expansio%CC%81n@3x.png",
      },
      {
        title: "El Financiero ",
        desc: "DiDi Préstamos, el nuevo servicio de créditos de hasta 30 mil pesos para choferes...",
        subDesc:
          "Los usuarios podrán elegir el plazo de liquidación más accesible, ya sea 61 o 91 días, con una tasa de interés mensual que empezará desde el 5 por ciento.",
        type: "press",
        imageSrc:
          "https://s3-us01.didiglobal.com/silver-bullet-img/2022-02-25/f6IxAOr5Ujp0hk3XdbiuH-El%20Financiero@3x.png",
      },
      {
        title: "Xataka",
        desc: "DiDi ahora prestará hasta 30,000 pesos en México, tanto a conductores como...",
        subDesc:
          "Estará disponible no solamente para conductores, sino también para pasajeros. ",
        type: "press",
        imageSrc:
          "https://s3-us01.didiglobal.com/silver-bullet-img/2022-03-01/41aCztTgkcvCAnz-0PHUh-%E6%9B%B4%E6%96%B0-Xataka@3x.png",
      },
      {
        title: "Milenio",
        desc: "DiDi otorgará préstamos personales a usuarios y conductores; así ...",
        subDesc:
          "DiDi otorgará préstamos personales a usuarios y conductores; así ...",
        type: "press",
        imageSrc:
          "https://s3-us01.didiglobal.com/silver-bullet-img/2022-03-01/L4NJS4zqtz9UsQMyRazvL-%E6%9B%B4%E6%96%B0-Milenio@3x.png",
      },
    ],
  };
  // const props: ColumnsSectionProps = {
  //   title: t("DiDiPrestamosColumns.title"),
  //   desc: t("DiDiPrestamosColumns.desc"),
  //   bgColor: t("DiDiPrestamosColumns.bgColor"),
  //   textColor: t("DiDiPrestamosColumns.textColor"),
  //   columns: t("DiDiPrestamosColumns.columns", { returnObjects: true }),
  // };

  // if (images) {
  //   props.columns.forEach((col, index) => {
  //     const image = images[index].gatsbyImageData;
  //     col.image = (
  //       <GatsbyImage
  //         image={image}
  //         alt={images[index].description}
  //         className="z-10 m-4 w-48"
  //       ></GatsbyImage>
  //     );
  //   });
  // }
  return <CardsCarousel {...props}></CardsCarousel>;
};

export default DiDiPrestamosPress;
