// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import Image from "../Image"
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface TaxRequiredColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const TaxRequiredColumns = ({ images }: TaxRequiredColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("TaxRequiredColumns.title"),
    bgColor: t("TaxRequiredColumns.bgColor"),
    textColor: t("TaxRequiredColumns.textColor"),
    columns: t("TaxRequiredColumns.columns", { returnObjects: true }),
  };

  props.columns.forEach((col: any, index: number) => {
    if(images) {
      col.image = (
        <Link to={col.linkItem}>
          <Image imageData={images[index]} imageStyle="z-10 m-4 h-48"></Image>
        </Link>
      );
    }
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default TaxRequiredColumns;
