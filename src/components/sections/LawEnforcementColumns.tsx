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

  props.columns.forEach((col, index) => {
    col.iconTop = <div className="absolute left-2/4 transform -translate-x-2/4 -top-4 font-bold rounded-full bg-orange-primary px-4 py-2 text-white">{index + 1}</div>
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default LawEnforcementColumns;
