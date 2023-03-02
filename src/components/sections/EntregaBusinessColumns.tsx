import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const EntregaBusinessColumns = ({ images }: FoodColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("EntregaBusinessColumns.bgColor"),
    textColor: t("EntregaBusinessColumns.textColor"),
    columns: t("EntregaBusinessColumns.columns", { returnObjects: true }),
  };

  props.columns.forEach((col, index) => {
    const image = images[index];
    col.image = image;
    col.imageStyle = "z-10";
    col.isImage = true;
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default EntregaBusinessColumns;
