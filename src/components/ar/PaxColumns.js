import React from "react";
import ColumnsSection from "../ColumnSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const PaxColumns = () => {
  const bgColor = "bg-white";
  const columns = [
    {
      title: "Amplia disponibilidad y cobertura",
      desc: "Tenemos opciones que se adaptan a tus necesidades de movilidad, ¡Encontranos ahora en toda Argentina!",
      bgColor: "white",
      textColor: "gray-primary",
      image: <FontAwesomeIcon icon={faUserShield} size="4x" />,
    },
    {
      title: "Precios bajos",
      desc: "Disfrutá de viajes tranquilos y de todos nuestros beneficios sin pagar más.",
      bgColor: "white",
      textColor: "gray-primary",
      image: <FontAwesomeIcon icon={faDollarSign} size="4x" />,
    },
    {
      title: "Soporte 24/7",
      desc: "Tu seguridad es nuestra prioridad, por eso contamos con soporte telefónico 24/7 para atender todas tus dudas o solicitudes.",
      bgColor: "white",
      textColor: "gray-primary",
      image: <FontAwesomeIcon icon={faClock} size="4x" />,
    },
  ];
  return <ColumnsSection columns={columns} bgColor={bgColor}></ColumnsSection>;
};

export default PaxColumns;
