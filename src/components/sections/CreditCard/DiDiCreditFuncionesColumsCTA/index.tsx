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
    columns: t("DiDiCreditFuncionesColumsCTA.columns", { returnObjects: true }),
    textColor: "white",
    bgColor: "",
    hasGrid: true,
  };

  console.log(props.columns);
  if (images) {
    props.columns.forEach((col, index) => {
      col.image = images[index];
      col.imageStyle = "z-10 m-4 w-48";
      col.isImage = true;
      col.bgColor = "bg-orange-primary";
      col.rounded = "rounded-[32px]";
      col.customWidth = "w-full";
    });
  }
  return <ColumnsSection {...props}></ColumnsSection>;
};

export default DiDiCreditFuncionesColumsCTA;
