import React from "react";
import ColumnsSection from "../ColumnSection";
import { StaticImage } from "gatsby-plugin-image";

const FoodColumns = () => {
  const bgColor = "bg-white";
  const columns = [
    {
      title: "Amplia disponibilidad y cobertura",
      desc: "Tenemos opciones que se adaptan a tus necesidades de movilidad, ¡encuéntranos ahora en todo Chile!",
      bgColor: "bg-orange-primary",
      textColor: "white",
      image: (
        <StaticImage
          src="../../images/cl/cl-food-column-1.jpg"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10"
        ></StaticImage>
      ),
    },
    {
      title: "Ordena sin complicaciones",
      desc: "¿Tienes ganas de una hamburguesa, pizza o sushi? Con DiDi Food ordenar es fácil y rápido. ¿No tienes efectivo? No te preocupes, también puedes pagar con tarjeta de crédito. Nuestra prioridad es que recibas tu comida en tu puerta.",
      bgColor: "bg-green-600",
      textColor: "white",
      image: (
        <StaticImage
          src="../../images/cl/cl-food-column-2.jpg"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10"
        ></StaticImage>
      ),
    },
    {
      title: "Entrega express",
      desc: "En DiDi Food procuramos que las órdenes sean entregadas en el menor tiempo posible y en perfectas condiciones.",
      bgColor: "bg-gray-primary",
      textColor: "white",
      image: (
        <StaticImage
          src="../../images/cl/cl-food-column-3.jpg"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10"
        ></StaticImage>
      ),
    },
  ];
  return <ColumnsSection columns={columns} bgColor={bgColor}></ColumnsSection>;
};

export default FoodColumns;
