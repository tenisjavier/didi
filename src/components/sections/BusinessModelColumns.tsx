import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface BusinessModelColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const BusinessModelColumns = ({ images }: BusinessModelColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("BusinessModelColumns.title"),
    bgColor: t("BusinessModelColumns.bgColor"),
    textColor: t("BusinessModelColumns.textColor"),
    columns: t("BusinessModelColumns.columns", { returnObjects: true }),
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

export default BusinessModelColumns;
