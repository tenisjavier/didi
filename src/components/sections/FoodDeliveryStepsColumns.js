import React from "react";
import ColumnsSection from "../ColumnSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faFile,
  faIdBadge,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const FoodDeliveryStepsColumns = () => {
  const bgColor = "bg-gray-light";
  const title = "¿CÓMO REPARTIR A TRAVÉS DE DIDI FOOD?";
  const columns = [
    {
      title: "1. Descarga la aplicación",
      textColor: "gray-primary",
      image: <FontAwesomeIcon icon={faMobileAlt} size="3x" />,
      height: "h-40",
    },
    {
      title: "2. Sube los documentos requeridos",
      textColor: "gray-primary",
      image: <FontAwesomeIcon icon={faFile} size="3x" />,
      height: "h-40",
    },
    {
      title: "3. Espera la verificación de tu información",
      textColor: "gray-primary",
      image: <FontAwesomeIcon icon={faIdBadge} size="3x" />,
      height: "h-40",
    },
    {
      title: "4. Comienza a generar ganancias a través de DiDi Food",
      textColor: "gray-primary",
      image: <FontAwesomeIcon icon={faDollarSign} size="3x" />,
      height: "h-40",
    },
  ];
  return (
    <ColumnsSection
      columns={columns}
      bgColor={bgColor}
      title={title}
    ></ColumnsSection>
  );
};

export default FoodDeliveryStepsColumns;
