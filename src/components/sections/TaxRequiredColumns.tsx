// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface TaxRequiredColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const TaxRequiredColumns = ({ images }: TaxRequiredColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    title: t("TaxRequiredColumns.title"),
    bgColor: t("TaxRequiredColumns.bgColor"),
    textColor: t("TaxRequiredColumns.textColor"),
    columns: t("TaxRequiredColumns.columns", { returnObjects: true }),
  };

  props.columns.forEach((col: any, index: number) => {
    const image = images[index].gatsbyImageData;
    col.image = (
      <Link to={col.linkItem}>
        <GatsbyImage
          image={image}
          alt={images[index].description}
          className="z-10 m-4 h-48"
        ></GatsbyImage>
      </Link>
    );
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default TaxRequiredColumns;
