import React from "react";
import ColumnsSection from "../ColumnSection";

const DrvVideoGrid = () => {
  const bgColor = "bg-blue-primary";
  const title = "Sigue estos pasos para empezar a manejar y generar ingresos";
  const textColor = "white";
  const columns = [
    {
      title: "Sube tu Cédula de Identidad Chilena",
      bgColor: "bg-blue-primary",
      image: (
        <iframe
          className="h-56 w-full"
          src="https://www.youtube.com/embed/1853mnRqTW4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      title: "Sube una fotografía de ti sosteniendo tu cédula de identidad",
      bgColor: "bg-blue-primary",
      image: (
        <iframe
          className="h-56 w-full"
          src="https://www.youtube.com/embed/6TyVl3r1wUM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      title: "Sube tu licencia de conducir Chilena",
      bgColor: "bg-blue-primary",
      image: (
        <iframe
          className="h-56 w-full"
          src="https://www.youtube.com/embed/cDXmKDkOlL4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      title: "Sube tu Permiso de Circulación al día",
      bgColor: "bg-blue-primary",
      image: (
        <iframe
          className="h-56 w-full"
          src="https://www.youtube.com/embed/LH6BgttFSTc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      title: "Sube tu Permiso de Circulación al día",
      bgColor: "bg-blue-primary",
      image: (
        <iframe
          className="h-56 w-full"
          src="https://www.youtube.com/embed/6lq6C1AbdPw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
  ];
  return (
    <ColumnsSection
      columns={columns}
      bgColor={bgColor}
      title={title}
      textColor={textColor}
    ></ColumnsSection>
  );
};

export default DrvVideoGrid;
