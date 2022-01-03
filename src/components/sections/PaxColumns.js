import React from "react";
import ColumnsSection from "../ColumnSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const HomeColumns = () => {
  const bgColor = "bg-white";
  const columns = [
    {
      title: "Amplia disponibilidad y cobertura",
      desc: "Tenemos opciones que se adaptan a tus necesidades de movilidad, ¡encuéntranos ahora en todo Chile!",
      bgColor: "bg-white",
      bgTextColor: "text-gray-primary",
      image: <FontAwesomeIcon icon={faUserShield} size="4x" />,
    },
    {
      title: "Precios bajos",
      desc: "Disfruta de viajes tranquilos y de todos nuestros beneficios sin pagar más.",
      bgColor: "bg-white",
      bgTextColor: "text-gray-primary",
      image: <FontAwesomeIcon icon={faDollarSign} size="4x" />,
    },
    {
      title: "Soporte 24/7",
      desc: "Tu seguridad es nuestra prioridad, por eso contamos con soporte telefónico 24/7 para atender todas tus dudas o solicitudes.",
      bgColor: "bg-white",
      bgTextColor: "text-gray-primary",
      image: <FontAwesomeIcon icon={faClock} size="4x" />,
    },
  ];
  return <ColumnsSection columns={columns} bgColor={bgColor}></ColumnsSection>;
};

export default HomeColumns;
