import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface TemplateStorieColumnsProps {
  images: {
    title: string;
    description: string;
  }[];
}

const TemplateStorieColumns = ({ images }: TemplateStorieColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    bgColor: t("TemplateStorieColumns.bgColor"),
    textColor: t("TemplateStorieColumns.textColor"),
    columns: t("TemplateStorieColumns.columns", { returnObjects: true }),
  };

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default TemplateStorieColumns;
