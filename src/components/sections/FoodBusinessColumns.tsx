import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodBusinessColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const FoodBusinessColumns = ({ images }: FoodBusinessColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("FoodBusinessColumns.bgColor"),
    textColor: t("FoodBusinessColumns.textColor"),
    columns: t("FoodBusinessColumns.columns", { returnObjects: true }),
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

export default FoodBusinessColumns;
