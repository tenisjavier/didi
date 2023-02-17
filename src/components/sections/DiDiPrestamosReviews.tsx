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

const DiDiPrestamosReviews = ({ bgImage }: any) => {
  const props: CardsCarouselProps = {
    title: "¿Qué dicen los usuarios sobre nosotros?",
    desc: "Muchos usuarios ya pidieron un préstamo en DiDi.",
    bgColor: "bg-white",
    bgImage: bgImage,
    bgImageStyle: "!absolute z-0 h-full w-full md:block ",
    cards: [
      {
        title: "Excelente servicio",
        desc: "¡Excelente servicio! Me ayudó mucho. Usaré DiDi Préstamos en el futuro. ",
        type: "review",
        reviewAuthor: "Leire",
        reviewRole: "Enfermera",
        reviewDate: "13/8/2021",
        reviewGeo: "Ciudad de México",
        imageSrc:
          "https://s3-us01.didiglobal.com/silver-bullet-img/2022-03-04/SoMy-OEYR0-N3wWi_2UBC-Mejia.png?x-s3-process=image/format,webp",
      },
      {
        title: "Fácil de usar",
        desc: "Excelente opción para una emergencia. Obtuve mi préstamo en cuanto se aprobó. ",
        type: "review",
        reviewAuthor: "Leire",
        reviewRole: "Enfermera",
        reviewDate: "9/10/2021",
        reviewGeo: "Guadalajara",
        imageSrc:
          "https://s3-us01.didiglobal.com/silver-bullet-img/2022-03-04/vA6h3P1IMDTMK9V_Iv8IJ-Martinez.png?x-s3-process=image/format,webp",
      },
      {
        title: "Rápido aumento de límite",
        desc: "¡Mi límite de préstamo aumentó después de que pagué mi primer préstamo! ¡Qué linda sorpresa!",
        type: "review",
        reviewAuthor: "Erika",
        reviewRole: "Maestra",
        reviewDate: "9/12/2021",
        reviewGeo: "Monterrey",
        imageSrc:
          "https://s3-us01.didiglobal.com/silver-bullet-img/2022-03-04/x4aCduecYqrD_QqC0mo38-Erika.png?x-s3-process=image/format,webp",
      },
      {
        title: "Tasa aceptable",
        desc: "Es mi primer crédito que solicito en la aplicacion y el interés es muy aceptable. Super...",
        type: "review",
        reviewAuthor: "Juan",
        reviewRole: "Camarero",
        reviewDate: "29/1/2022",
        reviewGeo: "Puebla",
        imageSrc:
          "https://s3-us01.didiglobal.com/silver-bullet-img/2022-03-04/hRlWO8b1rrP6t5OxMJpIh-Juan.png?x-s3-process=image/format,webp",
      },
      {
        title: "Trámites fáciles",
        desc: "Rapida aplicación sin tantos trámites y rápido aumento de limite.¡Excelente servicio!",
        type: "review",
        reviewAuthor: "Laura",
        reviewRole: "Taxista",
        reviewDate: "28/2/2022",
        reviewGeo: "Mérida",
        imageSrc:
          "https://s3-us01.didiglobal.com/silver-bullet-img/2022-03-04/vubsJADzPUcRi2vGPWEL--Laura.png?x-s3-process=image/format,webp",
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

export default DiDiPrestamosReviews;
