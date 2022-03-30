import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ColumnsSection from "../ColumnSection";

const SafetyGridDuringTrip = () => {
  const bgColor = "bg-orange-primary";
  const title = "Durante el Viaje";
  const textColor = "white";
  const columns = [
    {
      title: "Botón de Emergencia",
      desc: "Contamos con un equipo calificado para apoyarte durante una emergencia. Nuestro Centro tiene comunicación directa con las autoridades y sus diferentes redes de apoyo.",
      bgColor: "bg-orange-primary",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-8.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10  m-4"
        ></StaticImage>
      ),
    },
    {
      title: "Compartir Viaje",
      desc: "En DiDi podés compartir tu ubicación en tiempo real con cualquier persona que vos elijás.",
      bgColor: "bg-orange-primary",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-9.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10  m-4"
        ></StaticImage>
      ),
    },
    {
      title: "Monitoreo de viaje en tiempo real",
      desc: "Rastreamos por GPS todos los viajes hacés, en caso de un incidente, podamos reaccionar de forma inmediata.",
      bgColor: "bg-orange-primary",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-10.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10  m-4"
        ></StaticImage>
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

export default SafetyGridDuringTrip;
