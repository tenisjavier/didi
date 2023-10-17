import React from "react";
import { t } from "../../../../context/countryContext";
import ColumnsSection, {ColumnsSectionProps} from "../../../ColumnSection";

interface DiDiCreditBeneficiosColumnsProps {
}

const DiDiCreditBeneficiosColumns = ({  }: DiDiCreditBeneficiosColumnsProps) => {
  const props: ColumnsSectionProps = {
    title: t('DiDiCreditBeneficiosColumns.title'),
    bgColor: "",
    textColor: "",
    hasTextHighlight: true,
    columns: t('DiDiCreditBeneficiosColumns.columns', {returnObjects: true}),
    desc: t('DiDiCreditBeneficiosColumns.desc'),
  };


  props.columns.forEach((col) => {
    col.hasTextHighlighter = true;
    col.hasTextHighlighterDesc = true;
    col.hasTextHighlighterDescStyle = "font-bold"
  })
  
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiCreditBeneficiosColumns;
