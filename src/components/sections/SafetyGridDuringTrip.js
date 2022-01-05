import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ColumnsSection from "../ColumnSection";

const SafetyGridDuringTrip = () => {
  const bgColor = "bg-orange-primary";
  const title = "Durante el Viaje";
  const textColor = "white";
  const columns = [
    {
      title: "8. Botón de Emergencia",
      desc: "Durante cualquier situación inesperada en tu viaje, puedes presionar el botón de servicios de emergencia en la app, el cual te conecta con el 133 y nuestro Centro de Emergencias DiDi 24/7.",
      bgColor: "bg-white",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-8.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10 w-100 m-4"
        ></StaticImage>
      ),
    },
    {
      title: "9. Compartir Viaje",
      desc: "En DiDi puedes compartir tu ubicación en tiempo real con cualquier persona que tú elijas.",
      bgColor: "bg-white",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-9.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10 w-100 m-4"
        ></StaticImage>
      ),
    },
    {
      title: "10. Monitoreo de viaje en tiempo real",
      desc: "Rastreamos por GPS todos los viajes para que, en caso de un incidente, podamos reaccionar de forma inmediata. Si necesitas ayuda presiona el Botón de servicios de emergencia dentro de tu app para enlazarte al 133 y rastrear tu ubicación exacta.",
      bgColor: "bg-white",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-10.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10 w-100 m-4"
        ></StaticImage>
      ),
    },
    {
      title: "11. Patrullas de asistencia",
      desc: "Se ha habilitado a las patrullas de asistencia a cargo de Prosegur, las mismas que serán activadas por el Centro de Ayuda DiDi en caso de alguna emergencia.",
      bgColor: "bg-white",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-11.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10 w-100 m-4"
        ></StaticImage>
      ),
    },
    {
      title: "12. Viajes Asegurados",
      desc: "Todos los viajes realizados a través de la aplicación cuentan con un seguro de accidentes personales y responsabilidad civil para terceros y usuarios.",
      bgColor: "bg-white",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-12.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10 w-100 m-4"
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
