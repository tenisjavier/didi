import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ColumnsSection from "../ColumnSection";

const SafetyGridAfterTrip = () => {
  const bgColor = "bg-blue-primary";
  const title = "Al Finalizar el Viaje";
  const textColor = "white";
  const columns = [
    {
      title: "13. Objetos perdidos",
      desc: "¿Olvidaste algo en el vehículo? Con DiDi puedes contactar directamente al socio conductor para acordar la devolución.",
      bgColor: "bg-blue-primary",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-13.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10 w-100 m-4"
        ></StaticImage>
      ),
    },
    {
      title: "14. Soporte 24/7",
      desc: "Contamos con un equipo calificado para apoyarte durante una emergencia. Nuestro Centro tiene comunicación directa con las autoridades y sus diferentes redes de apoyo.",
      bgColor: "bg-blue-primary",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-14.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10 w-100 m-4"
        ></StaticImage>
      ),
    },
    {
      title: "15. Califica a tu Socio Conductor",
      desc: "Califica a tu conductor después de cada viaje y, si deseas, puedes darle un pago extra. Esto ayuda a retroalimentar el sistema y mantener la seguridad en la comunidad de usuarios y socios conductores.",
      bgColor: "bg-blue-primary",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-15.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10 w-100 m-4"
        ></StaticImage>
      ),
    },
    {
      title: "16. Bloquear Socio Conductor",
      desc: "Si sientes que la experiencia en tu recorrido no fue buena, al terminar el viaje, en el menú de calificación, encontrarás el botón de desvinculación de socio conductor/ socio taxista. Esto evitará que, en futuras oportunidades, vuelvas a tener viajes con este socio conductor / socio taxista en particular.",
      bgColor: "bg-blue-primary",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-16.png"
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
      bgColor: "bg-blue-primary",
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

export default SafetyGridAfterTrip;
