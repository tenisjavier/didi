import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DiDiPayColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const DiDiPayColumns = ({ images }: DiDiPayColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("DiDiPayColumns.title"),
    bgColor: t("DiDiPayColumns.bgColor"),
    textColor: t("DiDiPayColumns.textColor"),
    columns: t("DiDiPayColumns.columns", { returnObjects: true }),
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

export default DiDiPayColumns;
