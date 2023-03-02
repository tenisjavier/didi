// @desc Article Grid used for navigation
import React from "react";
import { Link } from "gatsby";
import Image from "../Image"
import { t } from "../../context/countryContext";
import ColumnNoLimitSection, {
  ColumnsSectionProps,
} from "../ColumnNoLimitSection";

interface TaxAdviceColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const TaxAdviceColumns = ({ images }: TaxAdviceColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("TaxAdviceColumns.title"),
    bgColor: t("TaxAdviceColumns.bgColor"),
    textColor: t("TaxAdviceColumns.textColor"),
    columns: t("TaxAdviceColumns.columns", { returnObjects: true }),
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

  return <ColumnNoLimitSection {...props}></ColumnNoLimitSection>;
};

export default TaxAdviceColumns;
