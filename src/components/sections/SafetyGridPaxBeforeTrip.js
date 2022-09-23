import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection from "../ColumnSection";

const SafetyGridPaxBeforeTrip = ({ images }) => {
  const { t } = useTranslation();
  const props = {
    title: t("SafetyGridPaxBeforeTrip.title"),
    bgColor: t("SafetyGridPaxBeforeTrip.bgColor"),
    textColor: t("SafetyGridPaxBeforeTrip.textColor"),
    columns: t("SafetyGridPaxBeforeTrip.columns", { returnObjects: true }),
    width: "w-72"
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

export default SafetyGridPaxBeforeTrip;
