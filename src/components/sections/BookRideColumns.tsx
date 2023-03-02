import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface BookRideColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const BookRideColumns = ({ images }: BookRideColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("BookRideColumns.title"),
    bgColor: t("BookRideColumns.bgColor"),
    textColor: t("BookRideColumns.textColor"),
    columns: t("BookRideColumns.columns", { returnObjects: true }),
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

export default BookRideColumns;
