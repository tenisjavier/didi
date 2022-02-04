import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ColumnsSection from "../ColumnSection";

const SafetyGridBeforeTrip = () => {
  const bgColor = "bg-white";
  const title = "Antes del Viaje";
  const textColor = "gray-primary";
  const columns = [
    {
      title: "1. Verificación de Socios Conductores",
      desc: "Para que una persona pueda registrarse como socio conductor o socio taxista en DiDi, debe pasar por una serie de validaciones de documentos personales.",
      bgColor: "bg-white",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-1.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10 m-4"
        ></StaticImage>
      ),
    },
    {
      title: "2. Reconocimiento Facial de Socios Conductores",
      desc: "Esta función verifica de manera aleatoria que el socio conductor que se conecta a la app sea el mismo registrado en el sistema a través de una selfie.",
      bgColor: "bg-white",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-2.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10 m-4"
        ></StaticImage>
      ),
    },
    {
      title: "3. Selfie para usuarios",
      desc: "Nuestra app solicita una selfie de seguridad al usuario de manera aleatoria antes de solicitar un viaje. Esta no se comparte con ningún socio conductor.",
      bgColor: "bg-white",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-3.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10  m-4"
        ></StaticImage>
      ),
    },
    {
      title: "4. RUT para usuarios (ID)",
      desc: "La app solicita el número de RUT al usuario de manera aleatoria antes de solicitar un viaje. Este no se comparte con ningún socio conductor.",
      bgColor: "bg-white",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-4.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10  m-4"
        ></StaticImage>
      ),
    },
    {
      title: "5. Información del viaje",
      desc: "Antes de subir al auto, la app te mostrará el nombre, la foto del socio conductor, número de viajes, calificación y los datos del vehículo.",
      bgColor: "bg-white",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-5.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10  m-4"
        ></StaticImage>
      ),
    },
    {
      title: "6. Privacidad de números telefónicos",
      desc: "En DiDi protegemos tu número telefónico y tus datos personales. Las llamadas realizadas entre usuarios y socios conductores usando la aplicación NO mostrarán tu número real.",
      bgColor: "bg-white",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-6.png"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10  m-4"
        ></StaticImage>
      ),
    },
    {
      title: "7. Contactos de confianza",
      desc: "Puedes elegir hasta cinco personas de tus contactos para compartirles tus viajes en tiempo real.",
      bgColor: "bg-white",
      image: (
        <StaticImage
          src="../../images/cl/cl-safety-6.png"
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

export default SafetyGridBeforeTrip;
