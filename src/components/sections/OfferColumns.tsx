import React from "react";
import { t } from "../../context/countryContext";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
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

  columns.forEach((col: any) => {
    const image = col.image.gatsbyImageData;
    col.image = (
      <GatsbyImage
        image={image}
        alt={col.image.description}
        className="z-10 m-4 w-24"
      ></GatsbyImage>
    );
    (col.bgColor = "bg-gray-light"), (col.textColor = "gray-primary");
  });

  props.columns = columns;

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default OfferColumns;
