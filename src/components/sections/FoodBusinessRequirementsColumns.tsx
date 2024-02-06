import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodBusinessRequirementsColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const FoodBusinessRequirementsColumns = ({ images }: FoodBusinessRequirementsColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("FoodBusinessRequirementsColumns.bgColor"),
    textColor: t("FoodBusinessRequirementsColumns.textColor"),
    columns: t("FoodBusinessRequirementsColumns.columns", { returnObjects: true }),
  };

  props.columns.forEach((col) => {
    if (images) {
      col.image = images.find((image) => image.title === col.imageName);
      col.imageStyle = "z-10";
      col.isImage = true;
      col.hasTextHighlighterDesc = true;
      col.hasTextHighlighterDescStyle = "font-bold text-xl !text-gray-primary"
    }
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodBusinessRequirementsColumns;
