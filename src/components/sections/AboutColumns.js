// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection from "../ColumnSection";

const AboutColumns = ({ images }) => {
  const { t } = useTranslation();
  const props = {
    title: t("AboutColumns.title"),
    bgColor: t("AboutColumns.bgColor"),
    textColor: t("AboutColumns.textColor"),
    columns: t("AboutColumns.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = getImage(images[index]);
    col.image = (
      <Link to={col.linkItem}>
        <GatsbyImage
          image={image}
          alt={images[index].description}
          width={700}
          height={700}
          className="z-10 m-4 h-48"
        ></GatsbyImage>
      </Link>
    );
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default AboutColumns;
