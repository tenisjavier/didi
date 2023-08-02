import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface MidiaKitColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const MidiaKitColumns = ({ images }: MidiaKitColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("MidiaKitColumns.bgColor"),
    textColor: t("MidiaKitColumns.textColor"),
    columns: t("MidiaKitColumns.columns", { returnObjects: true }),
  };

  if (images) {
    props.columns.forEach((col, index) => {
      const image = images[index];
      col.image = image;
      col.imageStyle = "z-10 m-4 w-full";
      col.isImage = true;
    });
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default MidiaKitColumns;
