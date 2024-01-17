import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface LawEnforcementColumns {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const LawEnforcementColumns = ({ }: LawEnforcementColumns) => {
  const props: ColumnsSectionProps = {
    title: t("LawEnforcementColumns.title"),
    desc: t("LawEnforcementColumns.desc"),
    bgColor: t("LawEnforcementColumns.bgColor"),
    textColor: t("LawEnforcementColumns.textColor"),
    columns: t("LawEnforcementColumns.columns", { returnObjects: true }),
    gridCols: "2",
    // gridConfig: "2"
  };

  props.columns.forEach(() => {
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default LawEnforcementColumns;
