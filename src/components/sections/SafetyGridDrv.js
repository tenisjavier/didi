import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import ColumnsSection from "../ColumnSection";

const SafetyGridDrv = ({ images }) => {
  const props = {
    title: t("SafetyGridDrv.title"),
    desc: t("SafetyGridDrv.desc"),
    bgColor: t("SafetyGridDrv.bgColor"),
    textColor: t("SafetyGridDrv.textColor"),
    columns: t("SafetyGridDrv.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = getImage(images[index]);
    col.image = (
      <GatsbyImage
        image={image}
        alt={images[index].description}
        className="z-10 m-4"
      ></GatsbyImage>
    );
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridDrv;
