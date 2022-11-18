import React from "react";
import { t } from "../../context/countryContext";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DiDiPayColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const DiDiPayColumns = ({ images }: DiDiPayColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("DiDiPayColumns.bgColor"),
    textColor: t("DiDiPayColumns.textColor"),
    columns: t("DiDiPayColumns.columns", { returnObjects: true }),
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

export default DiDiPayColumns;
