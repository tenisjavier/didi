// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import Image from "../Image"
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FinancialServicesColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: any;
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
    if(images) {
      col.image = (
        <Link to={col.linkItem}>
          <Image imageData={images[index]} imageStyle="z-10 m-4 h-56"></Image>
        </Link>
      );
    }
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FinancialServicesColumns;
