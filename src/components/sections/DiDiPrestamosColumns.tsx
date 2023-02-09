import React from "react";
import { t } from "../../context/countryContext";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DiDiPrestamosColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const DiDiPrestamosColumns = ({ images }: DiDiPrestamosColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("DiDiPrestamosColumns.title"),
    desc: t("DiDiPrestamosColumns.desc"),
    bgColor: t("DiDiPrestamosColumns.bgColor"),
    textColor: t("DiDiPrestamosColumns.textColor"),
    columns: t("DiDiPrestamosColumns.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      const image = images[index].gatsbyImageData;
      col.image = (
        <GatsbyImage
          image={image}
          alt={images[index].description}
          className="z-10 m-4 w-48"
        ></GatsbyImage>
      );
    });
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiPrestamosColumns;
