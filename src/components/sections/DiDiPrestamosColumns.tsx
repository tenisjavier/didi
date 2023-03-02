import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DiDiPrestamosColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
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
      col.image = images[index];
      col.imageStyle = "z-10 m-4 w-48";
      col.isImage = true;
    });
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiPrestamosColumns;
