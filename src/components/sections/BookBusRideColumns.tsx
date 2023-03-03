import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface BookBusRideColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const BookBusRideColumns = ({ images }: BookBusRideColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("BookBusRideColumns.title"),
    bgColor: t("BookBusRideColumns.bgColor"),
    textColor: t("BookBusRideColumns.textColor"),
    columns: t("BookBusRideColumns.columns", { returnObjects: true }),
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

export default BookBusRideColumns;
