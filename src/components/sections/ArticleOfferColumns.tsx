import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface ArticleOfferColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const ArticleOfferColumns = ({ images }: ArticleOfferColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t("ArticleOfferColumns.title"),
    desc: t("ArticleOfferColumns.desc"),
    bgColor: t("ArticleOfferColumns.bgColor"),
    textColor: t("ArticleOfferColumns.textColor"),
    columns: t("ArticleOfferColumns.columns", { returnObjects: true }),
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

export default ArticleOfferColumns;
