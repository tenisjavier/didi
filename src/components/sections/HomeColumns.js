import React from "react";
import ColumnsSection from "../ColumnSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faExclamationCircle,
  faHeadphonesAlt,
} from "@fortawesome/free-solid-svg-icons";

const HomeColumns = () => {
  const bgColor = "bg-white";
  const columns = [
    {
      title: "Acerca de Nosotros",
      desc: "Somos la app de movilidad más grande del mundo.",
      bgColor: "bg-white",
      bgTextColor: "",
      image: <FontAwesomeIcon icon={faQuoteRight} size="4x" />,
      btnText: "Saber Más",
      btnLink: "Con DiDi puedes viajar pagando menos.",
      btnMode: "light",
    },
    {
      title: "Legal",
      desc: "Conoce nuestras políticas y términos y condiciones de uso de la app DiDi Pasajero y la app DiDi Conductor en Chile.",
      bgColor: "bg-white",
      bgTextColor: "text-gray-primary",
      image: <FontAwesomeIcon icon={faExclamationCircle} size="4x" />,
      btnText: "Saber Más",
      btnLink: "Con DiDi puedes viajar pagando menos.",
      btnMode: "light",
    },
    {
      title: "Centro de Ayuda",
      desc: "Cuentas con DiDi 24/7 para escucharte, para ayudarte. \n Contáctanos: Si eres Socio Conductor 2 3304 0932 Si eres Pasajero 2 3304 0931",
      bgColor: "bg-white",
      bgTextColor: "text-gray-primary",
      image: <FontAwesomeIcon icon={faHeadphonesAlt} size="4x" />,
      btnText: "Saber Más",
      btnLink: "Con DiDi puedes viajar pagando menos.",
      btnMode: "light",
    },
  ];
  return <ColumnsSection columns={columns} bgColor={bgColor}></ColumnsSection>;
};

export default HomeColumns;
