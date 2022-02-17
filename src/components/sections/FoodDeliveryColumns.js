import React from "react";
import ColumnsSection from "../ColumnSection";
import { StaticImage } from "gatsby-plugin-image";

const FoodDeliveryColumns = () => {
  const bgColor = "bg-white";
  const columns = [
    {
      title: "Comienza a generar ingresos",
      desc: "Contamos con distintas promociones para los Socios Repartidores y cada día más usuarios nos prefieren. A través de DiDi Food, podrás generar ganancias.",
      bgColor: "bg-orange-primary",
      textColor: "white",
      image: (
        <StaticImage
          src="../../images/cl/cl-food-delivery-column-1.jpg"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10"
        ></StaticImage>
      ),
    },
    {
      title: "Disfruta de mayor flexibilidad",
      desc: "Con DiDi Food, puedes conectarte cuando más te convenga. Además, recoger pedidos y entregarlos es muy sencillo gracias a nuestro sistema de navegación fácil de usar. Sea con moto, auto o bicicleta, puedes generar ganancias.",
      bgColor: "bg-green-600",
      textColor: "white",
      image: (
        <StaticImage
          src="../../images/cl/cl-food-delivery-column-2.jpg"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10"
        ></StaticImage>
      ),
    },
    {
      title: "Seguridad al repartir",
      desc: "En DiDi Food, buscamos que realices entregas sintiéndote más seguro. Contamos con distintas herramientas de seguridad para que tus entregas comiencen y terminen de la mejor forma.",
      bgColor: "bg-gray-primary",
      textColor: "white",
      image: (
        <StaticImage
          src="../../images/cl/cl-food-delivery-column-3.jpg"
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

export default FoodDeliveryColumns;
