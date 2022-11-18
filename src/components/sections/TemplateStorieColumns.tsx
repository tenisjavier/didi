import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface TemplateStorieColumnsProps {
  images: {
    title: string;
    description: string;
  }[];
}

const TemplateStorieColumns = ({ images }: TemplateStorieColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("TemplateStorieColumns.bgColor"),
    textColor: t("TemplateStorieColumns.textColor"),
    columns: t("TemplateStorieColumns.columns", { returnObjects: true }),
  };

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default TemplateStorieColumns;
