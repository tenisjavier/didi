import React from "react";
import ColumnsSection from "../ColumnSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faExclamationCircle,
  faHeadphonesAlt,
} from "@fortawesome/free-solid-svg-icons";

const HomeColumns = () => {
  const bgColor = "bg-gray-light";
  const textColor = "gray-primary";
  const columns = [
    {
      title: "Acerca de Nosotros",
      desc: "Somos la app de movilidad más grande del mundo.",
      textColor: "gray-primary",
      image: <FontAwesomeIcon icon={faQuoteRight} size="3x" />,
      btnText: "Saber Más",
      btnLink: "centro-de-ayuda/",
      btnMode: "light",
      height: "h-80",
    },
    {
      title: "Legal",
      desc: "Conoce nuestras políticas y términos y condiciones de uso de la app DiDi Pasajero y la app DiDi Conductor en Chile.",
      textColor: "gray-primary",
      image: <FontAwesomeIcon icon={faExclamationCircle} size="3x" />,
      btnText: "Saber Más",
      btnLink: "centro-de-ayuda/",
      btnMode: "light",
      height: "h-80",
    },
    {
      title: "Centro de Ayuda",
      desc: "Cuentas con DiDi 24/7 para escucharte, para ayudarte. \n Contáctanos: Si eres Socio Conductor 2 3304 0932 Si eres Pasajero 2 3304 0931",
      textColor: "gray-primary",
      image: <FontAwesomeIcon icon={faHeadphonesAlt} size="3x" />,
      btnText: "Saber Más",
      btnLink: "centro-de-ayuda/",
      btnMode: "light",
      height: "h-80",
    },
  ];
  return (
    <ColumnsSection
      columns={columns}
      bgColor={bgColor}
      textColor={textColor}
    ></ColumnsSection>
  );
};

export default HomeColumns;
