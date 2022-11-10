import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

//
interface FoodColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const FoodColumns = ({ images }: FoodColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    bgColor: t("FoodColumns.bgColor"),
    textColor: t("FoodColumns.textColor"),
    columns: t("FoodColumns.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = images[index].gatsbyImageData;
    col.image = (
      <GatsbyImage
        image={image}
        alt={images[index].description}
        className="z-10"
      ></GatsbyImage>
    );
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodColumns;
