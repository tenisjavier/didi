import React from "react";
import { t } from "../../../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../../../ColumnSection";

interface DiDiCreditFuncionesColumsCTAProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const DiDiCreditFuncionesColumsCTA = ({ images }: DiDiCreditFuncionesColumsCTAProps) => {
  const props: ColumnsSectionProps = {
    columns: t("DiDiCreditFuncionesColums.columns", { returnObjects: true }),
    textColor: t("DiDiCreditFuncionesColums.textColor"),
    bgColor: "",
    hasGrid: true,
    title: t("DiDiCreditFuncionesColums.title"),
    hasTextHighlight: true,
  };

  if (images) {
    props.columns.forEach((col, index) => {
      col.image = images[index];
      col.imageStyle = "z-10 m-4 lg:w-44 w-auto";
      col.isImage = true;
      col.bgColor = t("DiDiCreditFuncionesColums.columns.bgColor");
      col.rounded = "rounded-[32px]";
      col.customWidth = "w-full";
      col.textColor = t("DiDiCreditFuncionesColums.columns.textColor");
      col.reverse = true;
    });
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiCreditFuncionesColumsCTA;
