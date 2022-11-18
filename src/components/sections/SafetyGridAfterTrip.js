import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import ColumnsSection from "../ColumnSection";

const SafetyGridAfterTrip = ({ images }) => {
  const props = {
    title: t("SafetyGridAfterTrip.title"),
    bgColor: t("SafetyGridAfterTrip.bgColor"),
    textColor: t("SafetyGridAfterTrip.textColor"),
    columns: t("SafetyGridAfterTrip.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = getImage(images[index]);
    col.image = (
      <GatsbyImage
        image={image}
        alt={images[index].description}
        width={700}
        height={700}
        className="z-10 m-4"
      ></GatsbyImage>
    );
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridAfterTrip;
