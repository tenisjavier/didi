import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection from "../ColumnSection";

const DiDiMasGrid = ({ images }) => {
  const { t } = useTranslation();
  const props = {
    title: t("DiDiMasGrid.title"),
    bgColor: t("DiDiMasGrid.bgColor"),
    textColor: t("DiDiMasGrid.textColor"),
    columns: t("DiDiMasGrid.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = getImage(images[index]);
    col.image = (
      <Link to="#">
        <GatsbyImage
          image={image}
          alt={images[index].description}
          width={700}
          height={700}
          className="z-10 m-4"
        ></GatsbyImage>
      </Link>
    );
  });
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiMasGrid;
