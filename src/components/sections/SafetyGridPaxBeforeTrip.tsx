import React from "react";
import { t } from "../../context/countryContext";
import ColumnsSection, { ColumnsSectionProps } from "../ColumnSection";

interface SafetyFeaturesGrid {
  images: {
    title: string;
    description: string;
    gatsbyImageData: React.ReactNode;
  }[];
}
const SafetyGridPaxBeforeTrip = ({ images }: SafetyFeaturesGrid) => {
  const props: ColumnsSectionProps = {
    title: t("SafetyGridPaxBeforeTrip.title"),
    bgColor: t("SafetyGridPaxBeforeTrip.bgColor"),
    textColor: t("SafetyGridPaxBeforeTrip.textColor"),
    columns: t("SafetyGridPaxBeforeTrip.columns", { returnObjects: true }),
    width: "w-72",
  };

  props.columns.forEach((col, index) => {
    const image = images[index];
    col.image = image;
    col.imageStyle = "z-10 m-4";
    col.isImage = true;
  });

  return <ColumnsSection {...props}></ColumnsSection>;
};

export default SafetyGridPaxBeforeTrip;
