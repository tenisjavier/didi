import React from "react";
import ColumnsSection from "../ColumnSection";

const DrvVideoGrid = () => {
  const bgColor = "bg-blue-primary";
  const title = "¿Cómo Registrarse como Socio Conductor?";
  const textColor = "white";
  const columns = [
    {
      title: "Seguí estos pasos para empezar a manejar y generar ingresos",
      bgColor: "bg-blue-primary",
      image: (
        <iframe
          className="h-56 w-full"
          src="https://www.youtube.com/embed/Es6Wtg_2Vas"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
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
