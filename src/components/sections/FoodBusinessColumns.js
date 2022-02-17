import React from "react";
import ColumnsSection from "../ColumnSection";
import { StaticImage } from "gatsby-plugin-image";

const FoodBusinessColumns = () => {
  const bgColor = "bg-white";
  const columns = [
    {
      title: "Obtén más pedidos",
      desc: "La gran base de usuarios de DiDi Food permite que promociones tu restaurante a través de la app y que puedas llegar a nuevos clientes. Además, nuestra aplicación facilita que los usuarios realicen pedidos a tu restaurante. Puedes llevar tus platos a más personas y hacer que les resulte más fácil volver a pedir.",
      bgColor: "bg-orange-primary",
      textColor: "white",
      image: (
        <StaticImage
          src="../../images/cl/cl-food-business-column-1.jpg"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10"
        ></StaticImage>
      ),
    },
    {
      title: "Entregas confiables",
      desc: "A través de nuestras diversas acciones y activaciones, buscamos la disponibilidad constante de Socios Repartidores, aún en horas peak. La tecnología de la plataforma procura que los usuarios reciban sus pedidos según sus preferencias y en el menor tiempo posible.",
      bgColor: "bg-green-600",
      textColor: "white",
      image: (
        <StaticImage
          src="../../images/cl/cl-food-business-column-2.jpg"
          alt="conductor didi"
          width={700}
          height={700}
          className="z-10"
        ></StaticImage>
      ),
    },
    {
      title: "Servicio integral",
      desc: "Nuestra línea de servicio integral puede llevar tu marca al siguiente nivel. Desde nuestros representantes experimentados y nuestro práctico servicio de Soporte DiDi, hasta el marketing personalizado y orientado a resultados. Puedes contar con DiDi Food para ayudarte en cada paso del proceso.",
      bgColor: "bg-gray-primary",
      textColor: "white",
      image: (
        <StaticImage
          src="../../images/cl/cl-food-business-column-3.jpg"
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

export default FoodBusinessColumns;
