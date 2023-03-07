import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodDeliveryColumns {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const FoodDeliveryColumns = ({ images }: FoodDeliveryColumns) => {
  const props: ColumnsSectionProps = {
    bgColor: t("FoodDeliveryColumns.bgColor"),
    textColor: t("FoodDeliveryColumns.textColor"),
    columns: t("FoodDeliveryColumns.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = images[index];
    col.image = image;
    col.imageStyle = "z-10";
    col.isImage = true;
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodDeliveryColumns;
