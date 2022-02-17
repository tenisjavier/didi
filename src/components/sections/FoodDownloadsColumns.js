import React from "react";
import ColumnsSection from "../ColumnSection";
import { StaticImage } from "gatsby-plugin-image";

const FoodDownloadsColumns = () => {
  const bgColor = "bg-white";
  const textColor = "gray-primary";
  const title = " Descargar DiDi Food para Tienda";
  const desc = "¡Optimiza tu negocio y empieza a recibir más pedidos!";
  const columns = [
    {
      image: (
        <a href="https://img0.didiglobal.com/static/soda_static/b/pc/client/DiDiStore_win32_1.2.20.exe">
          <StaticImage
            src="../../images/pc-app.png"
            alt="conductor didi"
            width={700}
            className="z-10"
          ></StaticImage>
        </a>
      ),
    },
    {
      image: (
        <a href="https://img0.didiglobal.com/static/soda_static/b/app/global-merchant-application-mexicoPad-release_1.2.34_2021030503.apk">
          <StaticImage
            src="../../images/tablet-app.png"
            alt="conductor didi"
            width={700}
            className="z-10"
          ></StaticImage>
        </a>
      ),
    },
    {
      image: (
        <a href="https://d.didiglobal.com/3cikL">
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

export default FoodDownloadsColumns;
