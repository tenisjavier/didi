import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface LawEnforcementRequestColumns {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const LawEnforcementRequestColumns = ({ }: LawEnforcementRequestColumns) => {
  const props: ColumnsSectionProps = {
    title: t("LawEnforcementRequestColumns.title"),
    bgColor: t("LawEnforcementRequestColumns.bgColor"),
    textColor: t("LawEnforcementRequestColumns.textColor"),
    columns: t("LawEnforcementRequestColumns.columns", { returnObjects: true }),
    gridCols: "2",
    btnMode: t("LawEnforcementRequestColumns.btnMode"),
    btnText: t("LawEnforcementRequestColumns.btnText"),
    btnLink: t("LawEnforcementRequestColumns.btnLink"),
    btnType: "custom"
  };

  props.columns.forEach((col, index) => {
    col.iconTop = <div className="absolute left-2/4 transform -translate-x-2/4 -top-4 font-bold rounded-full bg-orange-primary px-4 py-2 text-white">{index + 1}</div>
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default LawEnforcementRequestColumns;
