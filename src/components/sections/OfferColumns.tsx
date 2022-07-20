import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
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
  const { t } = useTranslation();
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
