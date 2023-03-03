import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface OfferColumnsProps {
  columns: {
    title: string;
    desc: string;
    image: any;
    bgColor: string;
    textColor: string;
  }[];
}

const OfferColumns = ({ columns }: OfferColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("OfferColumns.title"),
    bgColor: t("OfferColumns.bgColor"),
    textColor: t("OfferColumns.textColor"),
    columns: [],
  };

  columns.forEach((col: any, index) => {
    col.imageStyle = "z-10 m-2 w-72";
    col.isImage = true;
    col.image = columns[index].image;
    (col.bgColor = "bg-gray-light"), (col.textColor = "gray-primary");
  });

  props.columns = columns;

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default OfferColumns;
