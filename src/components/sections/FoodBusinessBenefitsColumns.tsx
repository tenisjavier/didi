import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface FoodBusinessBenefitsColumnsProps {
  images?: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}

const FoodBusinessBenefitsColumns = ({
  images,
}: FoodBusinessBenefitsColumnsProps) => {
  const props: ColumnsSectionProps = {
    bgColor: t("FoodBusinessBenefitsColumns.bgColor"),
    textColor: t("FoodBusinessBenefitsColumns.textColor"),
    columns: t("FoodBusinessBenefitsColumns.columns", { returnObjects: true }),
  };

  props.columns.forEach((col) => {
    if (images) {
      col.image = images.find((image) => image.title === col.imageName);
      col.imageStyle = "z-10";
      col.isImage = true;
    }
    col.hasTextHighlighterDesc = true;
    col.hasTextHighlighterDescStyle = "font-bold";
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default FoodBusinessBenefitsColumns;
