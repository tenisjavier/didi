import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface DiDiPayServiceColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const DiDiPayServiceColumns = ({ images }: DiDiPayServiceColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("DiDiPayServiceColumns.title"),
    desc: t("DiDiPayServiceColumns.desc"),
    bgColor: t("DiDiPayServiceColumns.bgColor"),
    textColor: t("DiDiPayServiceColumns.textColor"),
    columns: t("DiDiPayServiceColumns.columns", { returnObjects: true }),
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

export default DiDiPayServiceColumns;
