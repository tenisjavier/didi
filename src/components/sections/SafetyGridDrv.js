import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ColumnsSection from "../ColumnSection";

const SafetyGridDrv = () => {
  const bgColor = "bg-white";
  const title = "Además, si eres un Socio Conductor/Taxista";
  const textColor = "gray-primary";
  const columns = [
    {
      title: "17. Zonas de seguridad para Socios Conductores",
      desc: "Pensando en tu seguridad, tenemos identificadas zonas de riesgo en las cuales la conectividad de la app no está habilitada.",
      bgColor: "bg-white",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-17.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10 w-100 m-4"
        ></StaticImage>
      ),
    },
    {
      title: "18. Cancelar viajes en zonas de alto riesgo",
      desc: "Si recibes una solicitud de viaje en una zona de alto riesgo, podrás cancelar el viaje sin penalidad.",
      bgColor: "bg-white",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-18.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10 w-100 m-4"
        ></StaticImage>
      ),
    },
    {
      title: "19. Bloquear usuario",
      desc: "Si eres socio conductor y no deseas que la plataforma te vuelva a conectar con el pasajero de tu último viaje, podrás usar la opción desvinculación de usuario. Esto evitará que futuros viajes coincidan con esa persona.",
      bgColor: "bg-white",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-19.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10 w-100 m-4"
        ></StaticImage>
      ),
    },
    {
      title: "20. Información del usuario",
      desc: "Si eres socio conductor/taxista, la aplicación te mostrará quién es el pasajero y podrás ver todos los detalles antes de iniciar el viaje, incluso el destino al que se dirige.",
      bgColor: "bg-white",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-20.png"
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

export default SafetyGridDrv;
