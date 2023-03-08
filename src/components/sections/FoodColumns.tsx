import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const FoodColumns = ({ images }: FoodColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("FoodColumns.bgColor"),
    textColor: t("FoodColumns.textColor"),
    columns: t("FoodColumns.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    if(images) {
      const image = images[index];
      col.image = image;
      col.imageStyle = "z-10";
      col.isImage = true;
    }
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodColumns;
