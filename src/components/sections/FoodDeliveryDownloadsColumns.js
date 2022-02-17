import React from "react";
import ColumnsSection from "../ColumnSection";
import { StaticImage } from "gatsby-plugin-image";

const FoodDeliveryDownloadsColumns = () => {
  const bgColor = "bg-white";
  const textColor = "gray-primary";
  const title = " Obtén la aplicación DiDi Repartidor";
  const desc = "Acepta pedidos y comienza a generar ganancias";
  const columns = [
    {
      image: (
        <a href="https://www.didi-food.com/es-419/mobile-delivery/download">
          <StaticImage
            src="../../images/ios-app.png"
            alt="conductor didi"
            width={700}
            className="z-10"
          ></StaticImage>
        </a>
      ),
    },

    {
      image: (
        <a href="https://www.didi-food.com/es-419/mobile-delivery/download">
          <StaticImage
            src="../../images/android-app.png"
            alt="conductor didi"
            width={700}
            className="z-10"
          ></StaticImage>
        </a>
      ),
    },
  ];
  return (
    <ColumnsSection
      columns={columns}
      title={title}
      desc={desc}
      bgColor={bgColor}
      textColor={textColor}
    ></ColumnsSection>
  );
};

export default FoodDeliveryDownloadsColumns;
