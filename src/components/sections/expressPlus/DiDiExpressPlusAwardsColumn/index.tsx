import React from "react";
import { t } from "../../../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../../../ColumnSection";


interface DiDiExpressPlusAwardsColumnProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const DiDiExpressPlusAwardsColumn = ({ images }: DiDiExpressPlusAwardsColumnProps) => {
  const props: ColumnsSectionProps = {
    columns: t("DiDiExtraPlusAwardsColumn.columns", { returnObjects: true }),
    textColor: t("DiDiExtraPlusAwardsColumn.textColor"),
    bgColor: "bg-orange-primary",
    hasGrid: true,
    title: t("DiDiExtraPlusAwardsColumn.title"),
    hasTextHighlight: true,
    gridConfig: "flex flex-wrap justify-center gap-4",
  };

  if (images) {
    props.columns.forEach((col) => {
      col.image = images.find((image) => col.imageName ? image.title.includes(col.imageName) : 'image');
      col.imageStyle = "z-10 m-4 lg:w-44 w-[200px] rounded-[16px]";
      col.isImage = true;
      col.bgColor = t("DiDiExtraPlusAwardsColumn.col.bgColor");
      col.rounded = "rounded-[32px]";
      col.textColor = t("DiDiExtraPlusAwardsColumn.col.textColor");
      col.titlePosition = "beforeImage";
      col.descPosition = "afterBtn";
      col.titleStyles = "h-16";
      col.btnMode = "static";
    });
  }
  return (
    <ColumnsSection {...props}></ColumnsSection>
  );
};

export default DiDiExpressPlusAwardsColumn;
