import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DiDiPayBusinessColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const DiDiPayBusinessColumns = ({ images }: DiDiPayBusinessColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("DiDiPayBusinessColumns.bgColor"),
    textColor: t("DiDiPayBusinessColumns.textColor"),
    columns: t("DiDiPayBusinessColumns.columns", { returnObjects: true }),
  };
  
  if (images) {
    props.columns.forEach((col, index) => {
      col.image = images[index];
      col.imageStyle = "z-10 m-4 w-48";
      col.isImage = true;
    });
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiPayBusinessColumns;
