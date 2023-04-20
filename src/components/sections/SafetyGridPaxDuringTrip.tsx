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

const SafetyGridPaxDuringTrip = ({ images }: SafetyFeaturesGrid) => {
  const props: ColumnsSectionProps = {
    title: t("SafetyGridPaxDuringTrip.title"),
    desc: t("SafetyGridPaxDuringTrip.desc"),
    bgColor: t("SafetyGridPaxDuringTrip.bgColor"),
    textColor: t("SafetyGridPaxDuringTrip.textColor"),
    columns: t("SafetyGridPaxDuringTrip.columns", { returnObjects: true }),
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

export default SafetyGridPaxDuringTrip;