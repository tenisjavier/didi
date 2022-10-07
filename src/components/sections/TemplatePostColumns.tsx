import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface TemplatePostColumnsProps {
  images: {
    title: string;
    description: string;
  }[];
}

const TemplatePostColumns = ({ images }: TemplatePostColumnsProps) => {
  const { t } = useTranslation();
  const props: ColumnsSectionProps = {
    bgColor: t("TemplatePostColumns.bgColor"),
    textColor: t("TemplatePostColumns.textColor"),
    columns: t("TemplatePostColumns.columns", { returnObjects: true }),
  };
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default TemplatePostColumns;
