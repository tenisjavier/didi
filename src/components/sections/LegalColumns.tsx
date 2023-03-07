import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface LegalColumnsProps {
  title: string;
  columns: any[];
}

const LegalColumns = ({ columns }: LegalColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("LegalColumns.bgColor"),
    textColor: t("LegalColumns.textColor"),
    columns: columns || t("LegalColumns.columns", { returnObjects: true }),
  };

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default LegalColumns;
