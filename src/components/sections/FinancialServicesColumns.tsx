// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FinancialServicesColumnsProps {
  images: {
    title: string;
    description: string;
    gatsbyImageData: IGatsbyImageData;
  }[];
}

const FinancialServicesColumns = ({
  images,
}: FinancialServicesColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("FinancialServicesColumns.title"),
    bgColor: t("FinancialServicesColumns.bgColor"),
    textColor: t("FinancialServicesColumns.textColor"),
    columns: t("FinancialServicesColumns.columns", { returnObjects: true }),
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

export default FinancialServicesColumns;
