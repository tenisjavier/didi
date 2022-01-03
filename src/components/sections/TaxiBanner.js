import React from "react";
import ColumnsSection from "../ColumnSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const TaxiBanner = () => {
  const bgColor = "bg-orange-primary";
  const columns = [
    {
      title: "¿Aún tienes dudas?",
      desc: "Conoce todo sobre DiDi.",
      bgColor: "bg-orange-primary",
      textColor: "white",
      image: <FontAwesomeIcon icon={faQuestion} size="4x" />,
      btnText: "Saber Más",
      btnLink: "http://localhost:8000/cl/centro-de-ayuda.",
      btnMode: "light",
    },
  ];
  return <ColumnsSection columns={columns} bgColor={bgColor}></ColumnsSection>;
};

export default TaxiBanner;
